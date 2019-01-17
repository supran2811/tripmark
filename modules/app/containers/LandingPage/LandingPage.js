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
import { resetError } from "../../../app/store/action";
import {
  isAuthenticated,
  getPathToRedirect
} from "../../../auth/store/selector";
import { isLoading, getErrorData, hasError } from "../../store/selector";
import AppHeader from "../../components/AppHeader";

export class LandingPage extends Component {
  
  componentDidMount() {
    this.props.resetError();
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
                {this.renderWelcomeText()}
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <SignUpForm
                  requestSignUp={this.props.signUpRequest}
                  googleSignUp={this.props.googleSignUpRequest}
                  isLoading={this.props.loading}
                  hasError={this.props.error}
                  errorData={this.props.errorData}
                  t={t}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
  renderWelcomeText = () => {
    const { classes, t } = this.props;
    return  <div className = {classes.welcomeSection}>
      <h1 className={classes.title}>
        { t("headingText") }
      </h1>
      <h4>
        {t("welcomepagetext")}
      </h4>
    </div>;
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
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  error:PropTypes.bool.isRequired,
  signUpRequest:PropTypes.func.isRequired,
  googleSignUpRequest:PropTypes.func.isRequired,
  resetError:PropTypes.func.isRequired,
  loading:PropTypes.bool,
  errorData:PropTypes.object
};

export default connect(mapStateToProps , {signUpRequest , googleSignUpRequest , resetError} )(
  withLibs(LandingPage, ["authdata" , "common"], landingPageStyle)
);
