import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import withLibs from "../../../../lib/withLibs";
import landingBg from "../../../../assets/img/landing-bg.jpg";
import Parallax from "../../../../components/Parallax";
import GridContainer from "../../../../components/GridContainer";
import GridItem from "../../../../components/GridItem";
import landingPageStyle from "./landingPageStyle";
import SignUpForm from "../../../auth/components/SignUp";
import { signUpRequest, googleSignUpRequest } from "../../../auth/store/action";
import {
  isAuthenticated,
  getPathToRedirect
} from "../../../auth/store/selector";
import { isLoading, getErrorData, hasError } from "../../store/selector";
import { RESET_ERROR } from "../../store/actionTypes";
import AppHeader from "../../components/AppHeader";

export class LandingPage extends Component {
  
  componentDidMount() {
    this.props.dispatch({ type: RESET_ERROR.ACTION });
  }

  render() {
    const { classes, t } = this.props;

    return (
      <div>
        <AppHeader
          color="primary"
          fixed
          t={t}
        />
        <Parallax filter image={landingBg} className={classes.parrallexClass}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  {t("welcomepagetext")}
                </h4>
                <br />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <SignUpForm
                  requestSignUp={(name, email, password) =>
                    this.props.dispatch(signUpRequest(name, email, password))
                  }
                  googleSignUp={() =>
                    this.props.dispatch(googleSignUpRequest())
                  }
                  isLoading={this.props.loading}
                  hasError={this.props.error}
                  errorData={this.props.errorData}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  loading: isLoading(state),
  error: hasError(state),
  errorData: getErrorData(state),
  path: getPathToRedirect(state)
});

LandingPage.propTypes = {
  isAuthenticated:PropTypes.bool.isRequired,
  path:PropTypes.string.isRequired,
  dispatch:PropTypes.func.isRequired,
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  loading:PropTypes.bool,
  error:PropTypes.bool.isRequired,
  errorData:PropTypes.object
};

export default connect(mapStateToProps)(
  withLibs(LandingPage, ["authdata" , "common"], landingPageStyle)
);
