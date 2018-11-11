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
      console.log("Inisde AuthComponent========================================= " , query);
      let componentProps = {};
      const user = req && req.session ? req.session.user : null;
      
      // const uid = req && req.session ? req.session.uid : null;
      /// THIS IS SITUATION WHERE GET INITIAL PROPS IS EXECUTIING IN SERVER SIDE
      if(user && store && component.getInitialProps){
        console.log("get initial props executing on server side");
        componentProps = await component.getInitialProps({ store , query , uid : user.uid  });
      }
      /// THIS IS SITUATION WHERE GET INITIAL PROPS IS EXECUTIING IN CLIENT SIDE
      else if(typeof window !== "undefined" && store && component.getInitialProps){
        console.log("get initial props executing on client side");
        componentProps = await component.getInitialProps({ store , query  });
      } 

      console.log("COMING HERE AFTER EXECUTING ASYNC ACTIONS !!!");

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
        console.log("INSIDE SHOULD COMPONENT UPDATE 111");
        return false;
      }
      else if(oldtoken && oldtoken !== "null"  && firebaseLoaded === true && authenticated === true ) {
        console.log("INSIDE SHOULD COMPONENT UPDATE 222");
        return false;
      }
      else if(oldfirebaseLoaded === true && oldauthenticated === true && token && token !== "null") {
        console.log("INSIDE SHOULD COMPONENT UPDATE 333");
        return false;
      }
      else if( oldtoken === "null" && firebaseLoaded === true && authenticated === false ){
        console.log("INSIDE SHOULD COMPONENT UPDATE 444");
        return false;
      }
      else if( oldfirebaseLoaded === true && oldauthenticated === false && token === "null") {
        console.log("INSIDE SHOULD COMPONENT UPDATE 555");
        return false;
      }
      console.log("INSIDE SHOULD COMPONENT UPDATE 666");

      return true;
    }

    componentWillMount() {
      console.log("COMING HERE TO MOUNT AUTH COMPONENT!!");
    }

    componentWillUpdate() {
      console.log("COMING HERE TO UPDATE AUTH COMPONENT!!");
    }
  
    render() {
  
      console.log("COMING HERE TO RENDER WITH AUTH COMPONENT!!!!" , firebaseLoaded , authenticated);
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