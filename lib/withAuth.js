import React , { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated, isFirebaseLoaded } from "../modules/auth/store/selector";
import redirect from "./redirect";
import { setRedirectPath } from "../modules/auth/store/action";
import PageLoader from "../modules/app/components/PageLoader";
import { withI18next } from "./withI18next";

function serverComponent(component) {
  return class AuthComponent extends Component {

    static async getInitialProps ({req, res ,query , store} ) {
      let componentProps = {};
      const user = req && req.session ? req.session.user : null;
      
      // const uid = req && req.session ? req.session.uid : null;
      /// THIS IS SITUATION WHERE GET INITIAL PROPS IS EXECUTIING IN SERVER SIDE
      if(user && store && component.getInitialProps){
        componentProps = await component.getInitialProps({ store , query , uid : user.uid  });
      }
      /// THIS IS SITUATION WHERE GET INITIAL PROPS IS EXECUTIING IN CLIENT SIDE
      else if(typeof window !== "undefined" && store && component.getInitialProps){
        componentProps = await component.getInitialProps({ store , query  });
      } 
      if( user && user.token === "null") {
        redirect(res, "/login");
        store.dispatch(setRedirectPath(document.location.pathname));
      }

      return { user, ...componentProps };
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      const { firebaseLoaded : oldfirebaseLoaded , 
        authenticated : oldauthenticated , 
        token:oldtoken } = this.props;

      const { firebaseLoaded , 
        authenticated, 
        token } = nextProps;
    
      if(token === oldtoken && firebaseLoaded === oldfirebaseLoaded && authenticated === oldauthenticated){
        return false;
      }
      else if(oldtoken && oldtoken !== "null"  && firebaseLoaded === true && authenticated === true ) {
        return false;
      }
      else if(oldfirebaseLoaded === true && oldauthenticated === true && token && token !== "null") {
        return false;
      }
      else if( oldtoken === "null" && firebaseLoaded === true && authenticated === false ){
        return false;
      }
      else if( oldfirebaseLoaded === true && oldauthenticated === false && token === "null") {
        return false;
      }
      return true;
    }

    render() {
      const { authenticated, firebaseLoaded, dispatch , token , user } = this.props;
      const Component = component;
  
      if(firebaseLoaded) {
        if(!authenticated) {
          dispatch(setRedirectPath(window.location.pathname));
          redirect(undefined, "/login");
        }
  
        return authenticated ? <Component {...this.props} /> : null;
      }
      else if( user && user.token ) {
        if(token === "null") {
          dispatch(setRedirectPath(window.location.pathname));
          redirect(undefined, "/login");
        }
        
        return user.token !== "null" ? <Component {...this.props}/> : null;
      }
      else {
        return <PageLoader />;
      }
    }
  };
}

export default function withAuth(component , localesDataArray) {
  const mapStateToProps = state => (
    {
      authenticated: isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state)
    }
  );
  return connect(mapStateToProps)(withI18next(localesDataArray)(
    serverComponent(component)
  ));

}