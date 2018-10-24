import { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated, isFirebaseLoaded } from "../modules/auth/store/selector";
import redirect from "./redirect";
import { setRedirectPath } from "../modules/auth/store/action";
import PageLoader from "../modules/app/components/PageLoader";

class AuthComponent extends Component {

  render() {
    
    const { authenticated , firebaseLoaded , dispatch , component} = this.props;

    if(!authenticated && firebaseLoaded) {
      dispatch(setRedirectPath(window.location.pathname));
      console.log("Coming here!!!");
      redirect( undefined , "/login");
    }

    const Component = component;

    return !firebaseLoaded  ?  <PageLoader />  : 
              authenticated ?  <Component {...this.props} /> : null;
  }
}

export default function withAuth(ComposedComponent,context) {

  const mapStateToProps = state => (
    {
      authenticated : isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state),
      component: ComposedComponent,
      context:context
    }
  );
  return connect(mapStateToProps)(AuthComponent)

}