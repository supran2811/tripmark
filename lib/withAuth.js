import { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated, isFirebaseLoaded } from "../modules/auth/store/selector";
import redirect from "./redirect";
import { setRedirectPath } from "../modules/auth/store/action";
import PageLoader from "../modules/app/components/PageLoader";

class AuthComponent extends Component {

  static async getInitialProps ({req, query}) {
    console.log("Inisde AuthComponent " , req.session.decodedToken);
    const token = req && req.session ? req.session.decodedToken : null;
    return { token };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    const { authenticated, firebaseLoaded, dispatch, component , token } = this.props;
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
      
      return token !== "null" ? <Component {...this.props} /> : null;
    }
    else {
      return <PageLoader />;
    }

  }
}

export default function withAuth(ComposedComponent) {

  const mapStateToProps = state => (
    {
      authenticated: isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state),
      component: ComposedComponent
    }
  );
  return connect(mapStateToProps)(AuthComponent);

}