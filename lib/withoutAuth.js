import { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated, 
         isFirebaseLoaded, 
         getPathToRedirect } from "../modules/auth/store/selector";
import redirect from "./redirect";
import PageLoader from "../modules/app/components/PageLoader";
import { resetRedirectPath } from "../modules/auth/store/action";

class NotAuthComponent extends Component {

  render() {
    
    const { authenticated , firebaseLoaded , redirectPath , dispatch , component} = this.props;

    if(authenticated && firebaseLoaded) {
      redirect( undefined , redirectPath);
      dispatch(resetRedirectPath())
    }

    const Component = component;

    return !firebaseLoaded  ?  <PageLoader />  : 
              !authenticated ?  <Component {...this.props} /> : null;
  }
}

export default function withoutAuth(ComposedComponent,context) {

  const mapStateToProps = state => (
    {
      authenticated : isAuthenticated(state),
      firebaseLoaded: isFirebaseLoaded(state),
      redirectPath: getPathToRedirect(state),
      component: ComposedComponent,
      context:context
    }
  );
  return connect(mapStateToProps)(NotAuthComponent)

}