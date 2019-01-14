import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginRequest, googleSignUpRequest } from "../../../auth/store/action";
import { resetError } from "../../../app/store/action";
import SignUp from "../../../auth/components/SignUp";
import loginPageStyle from "./loginPageStyle";
import { isAuthenticated } from "../../../auth/store/selector";
import { isLoading, getErrorData, hasError } from "../../../app/store/selector";
import AppHeader from "../../../app/components/AppHeader";
import withLibs from "../../../../lib/withLibs";

export class LoginPage extends Component {

  componentDidMount() {
    this.props.resetError();
  }

  render() {
    const { classes , t } = this.props;
    return (
      <div>
        <AppHeader
          color="primary"
          fixed
          t={t}
          noLinks
        />
        <div className={classes.container}>
          <SignUp
            isLogin
            requestLogin={this.props.loginRequest}
            googleSignUp={this.props.googleSignUpRequest}
            isLoading={this.props.loading}
            hasError={this.props.error}
            errorData={this.props.errorData}
            t={t}
          />
        </div>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  loading: isLoading(state),
  error: hasError(state),
  errorData: getErrorData(state)
});

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  loginRequest: PropTypes.func,
  googleSignUpRequest: PropTypes.func,
  resetError:PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  errorData: PropTypes.object,
};

export default connect(mapStateToProps , 
  { googleSignUpRequest , 
    loginRequest,
    resetError})(withLibs(LoginPage, ["authdata","common"], loginPageStyle));
