import { Component } from "react";
import { connect } from "react-redux";

import { isAuthenticated } from "../modules/auth/store/selector";
import redirect from "./redirect";
import { setRedirectPath } from "../modules/auth/store/action";

class AuthComponent extends Component {

  componentDidMount() {
    if(!this.props.authenticated){
      console.log("Setting redirect path 111111111111")
       this.props.dispatch(setRedirectPath(window.location.pathname));
       redirect(this.props.context,"/");
    }
  }

  componentDidUpdate() {
    if(!this.props.authenticated){
      console.log("Setting redirect path 111111111111")
      this.props.dispatch(setRedirectPath(window.location.pathname));
      redirect(this.props.context,"/");
    }
  }

  render() {
    if(!this.props.authenticated) {
      return null;
    }
    const Component = this.props.component;

    return <Component {...this.props} />
  }
}

export default function withAuth(ComposedComponent,context) {

  const mapStateToProps = state => (
    {
      authenticated : isAuthenticated(state),
      component: ComposedComponent,
      context:context
    }
  );
  return connect(mapStateToProps)(AuthComponent)

}