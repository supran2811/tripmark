import { Component } from "react";
import { connect } from "react-redux";

import {
  isAuthenticated,
  isFirebaseLoaded,
  getPathToRedirect
} from "../modules/auth/store/selector";
import redirect from "./redirect";
import PageLoader from "../modules/app/components/PageLoader";
import { resetRedirectPath } from "../modules/auth/store/action";
import { withI18next } from "./withI18next";

class NotAuthComponent extends Component {

  static async getInitialProps ({req, res , store ,query}) {
    console.log("Inisde NotAuthComponent "  , getPathToRedirect(store.getState()));
    const  token  = req && req.session && req.session.user ? req.session.user.token : null;
    
    console.log("Inisde NotAuthComponent token"  , token);
    if(token && token !== "null") {
      redirect(res, getPathToRedirect(store.getState()));
      store.dispatch(resetRedirectPath());
    }
    return { token };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    const { authenticated, firebaseLoaded, redirectPath, dispatch, component, token } = this.props;

    console.log("Inside NotAuthComponent render context is ", token );

    const Component = component;

    if (firebaseLoaded) {
      if (authenticated) {
        redirect(undefined, redirectPath);
        dispatch(resetRedirectPath());
      }

      return !authenticated ? <Component {...this.props} /> : null;
    }
    else if (token) {
      if (token !== "null") {
        redirect(undefined, redirectPath);
        dispatch(resetRedirectPath());
      }

      return token === "null" ? <Component {...this.props} /> : null;
    }
    else {
      return <PageLoader />;
    }
  }
}

export default function withoutAuth(ComposedComponent , localesDataArray) {

  const mapStateToProps = state => (
    {
      authenticated: isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state),
      redirectPath: getPathToRedirect(state),
      component: ComposedComponent
    }
  );

  return connect(mapStateToProps)(withI18next(localesDataArray)(NotAuthComponent));

}