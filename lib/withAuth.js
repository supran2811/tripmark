import React , { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated, isFirebaseLoaded } from "../modules/auth/store/selector";
import redirect from "./redirect";
import { setRedirectPath } from "../modules/auth/store/action";
import PageLoader from "../modules/app/components/PageLoader";

function asyncComponent(component,actions) {
  return class AuthComponent extends Component {

    static async getInitialProps ({req, res ,query , store} ) {
      console.log("Inisde AuthComponent========================================= " , query);
      if(typeof window !== "undefined"){
        console.log("get initial props executing on client side wth ",req);
        await component.getInitialProps({ store , query , uid  });
      }
      const token = req && req.session ? req.session.decodedToken : null;
      const uid = req && req.session ? req.session.uid : null;
       token && 
            store  && 
                    uid && 
                          component.getInitialProps && 
                              await component.getInitialProps({ store , query , uid  });


      console.log("COMING HERE AFTER RESPONSE FROM WEB!!!");

      if( token && token === "null") {
        redirect(res, "/login");
        store.dispatch(setRedirectPath(document.location.pathname));
      }

      return { token , uid };
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  
    render() {
  
      const { authenticated, firebaseLoaded, dispatch , token , uid } = this.props;
      const Component = component;
     
      if(firebaseLoaded) {
        if(!authenticated) {
          dispatch(setRedirectPath(window.location.pathname));
          redirect(undefined, "/login");
        }
  
        return authenticated ? <Component {...this.props} /> : null;
      }
      else if( token ) {
        if(token === "null") {
          dispatch(setRedirectPath(window.location.pathname));
          redirect(undefined, "/login");
        }
        console.log("Rendering component ",uid);
        
        return token !== "null" ? <Component {...this.props}/> : null;
      }
      else {
        return <PageLoader />;
      }
  
    }
  };
}


export default function withAuth(component ,  actions) {
  console.log("withAuth Actions ",actions);
  const mapStateToProps = state => (
    {
      authenticated: isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state)
    }
  );
  return connect(mapStateToProps)(
    asyncComponent(component,actions)
  );

}