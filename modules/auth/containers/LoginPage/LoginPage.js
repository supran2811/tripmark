import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequest, googleSignUpRequest } from "../../../auth/store/action";
import PropTypes from "prop-types";

import SignUp from "../../../auth/components/SignUp";
import loginPageStyle from "./loginPageStyle";
import { isAuthenticated } from "../../../auth/store/selector";
import { isLoading, getErrorData, hasError } from "../../../app/store/selector";
import { RESET_ERROR } from "../../../app/store/actionTypes";
import AppHeader from "../../../app/components/AppHeader";
import withLibs from "../../../../lib/withLibs";

class LoginPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: RESET_ERROR.ACTION });
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
            requestLogin={(email, password) =>
              this.props.dispatch(loginRequest(email, password))
            }
            googleSignUp={() => this.props.dispatch(googleSignUpRequest())}
            isLoading={this.props.loading}
            hasError={this.props.error}
            errorData={this.props.errorData}
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
  loading: PropTypes.bool,
  error: PropTypes.bool.isRequired,
  errorData: PropTypes.object,
  t:PropTypes.func.isRequired
};

export default connect(mapStateToProps)(withLibs(LoginPage, ["common"], loginPageStyle));
