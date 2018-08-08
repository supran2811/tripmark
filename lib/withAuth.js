import { Component } from "react";
import { connect } from "react-redux";
import Router from 'next/router';

import { isAuthenticated } from "../modules/auth/store/selector";
import redirect from "./redirect";

class AuthComponent extends Component {

  componentDidMount() {
    if(!this.props.authenticated){
       redirect(this.props.context,"/");
    }
  }

  componentDidUpdate() {
    if(!this.props.authenticated){
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