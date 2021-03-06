import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import {
  withStyles,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from "validator";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";

import GridContainer from "../../../../components/GridContainer";
import GridItem from "../../../../components/GridItem";
import Card, {
  CardBody,
  CardFooter,
  CardHeader
} from "../../../../components/Card";
import CustomInput from "../../../../components/CustomInput";
import signupFormStyle from "./signupFormStyle";
import Button from "../../../../components/CustomButtons";

export class SignUpForm extends Component {
  state = {
    cardAnimation: "cardHidden",
    enableSubmit: false,
    name: { error: false, errorLabel: "", value: "" },
    email: { error: false, errorLabel: "", value: "" },
    password: { error: false, errorLabel: "", value: "" },
    rememberPassword: false
  };

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  onChangeName = e => {
    this.setState({
      name: { error: false, errorLabel: "", value: e.target.value }
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: { error: false, errorLabel: "", value: e.target.value }
    });
  };

  onChangePassword = e => {
    this.setState({
      password: { error: false, errorLabel: "", value: e.target.value }
    });
  };

  onChangeRememberPassword = e => {
    this.setState({ rememberPassword: e.target.checked });
  };

  validateForm = ( ) => {
    const { isLogin , requestLogin ,requestSignUp } = this.props;
    if (isLogin && this.isEmailValid() && this.isPasswordValid()) {
      requestLogin(
        this.state.email.value,
        this.state.password.value
      );
    } else if (
      this.isNameValid() &&
      this.isEmailValid() &&
      this.isPasswordValid()
    ) {
      requestSignUp(
        this.state.name.value,
        this.state.email.value,
        this.state.password.value
      );
    }
  }

  isNameValid = () => {
    const { t } = this.props;
    const name = this.state.name.value.trim();
    let nameObj;
    if (name.length == 0) {
      nameObj = {
        ...this.state.name,
        error: true,
        errorLabel: t("nameIsRequiredErrorText")
      };
      this.setState({ name: nameObj });
      return false;
    } else if (name.length < 4) {
      nameObj = {
        ...this.state.name,
        error: true,
        errorLabel: t("nameLenghtErrorText")
      };
      this.setState({ name: nameObj });
      return false;
    } else {
      return true;
    }
  }

  isEmailValid = ( ) => {
    const { t } = this.props;
    const email = this.state.email.value.trim();
    let emailObj;
    if (email.length == 0) {
      emailObj = {
        ...this.state.email,
        error: true,
        errorLabel: t("emailIsRequiredErrorText")
      };
      this.setState({ email: emailObj });
      return false;
    } else if (!validator.isEmail(email)) {
      emailObj = {
        ...this.state.email,
        error: true,
        errorLabel: t("emailLengthErrorText")
      };
      this.setState({ email: emailObj });
      return false;
    }
    return true;
  }

  isPasswordValid = ( ) => {
    const { t } = this.props;
    const password = this.state.password.value.trim();
    let passwordObj;
    if (password.length == 0) {
      passwordObj = {
        ...this.state.password,
        error: true,
        errorLabel: t("passwordIsRequiredErrorText")
      };
      this.setState({ password: passwordObj });
      return false;
    } else if (password.length <= 6) {
      passwordObj = {
        ...this.state.password,
        error: true,
        errorLabel: t("passwordLengthErrorText")
      };
      this.setState({ password: passwordObj });
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { classes, t } = this.props;
    
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={this.props.isLogin ? 12 : 10}>
          <Card className={classes[this.state.cardAnimaton]}>
            <form className={classes.form}>
              <CardHeader className={classes.cardHeader}>
                <Button
                  className={classes.googleLogin}
                  onClick={this.props.googleSignUp}
                >
                  <span />
                </Button>
              </CardHeader>
              <CardBody>
                {!this.props.isLogin ? (
                  <CustomInput
                    error={this.state.name.error}
                    labelText={
                      this.state.name.error
                        ? this.state.name.errorLabel
                        : t("enterNameInputPlaceholder")
                    }
                    id="fullNameID"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                      onChange: this.onChangeName
                    }}
                  />
                ) : null}
                <CustomInput
                  error={this.state.email.error}
                  labelText={
                    this.state.email.error
                      ? this.state.email.errorLabel
                      : t("emailnputPlaceholder")
                  }
                  id="emailID"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                    onChange: this.onChangeEmail
                  }}
                />
                <CustomInput
                  error={this.state.password.error}
                  labelText={
                    this.state.password.error
                      ? this.state.password.errorLabel
                      : t("passwordInputPlaceholder")
                  }
                  id="passwordID"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOutline className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                    onChange: this.onChangePassword
                  }}
                />
                {this.props.errorData &&
                  this.props.errorData.message && (
                  <div className={classes.error}>
                    {this.props.errorData.message}
                  </div>
                )}
                {this.props.isLogin && (
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.rememberPassword}
                            value="rememberPassword"
                            onChange={this.onChangeRememberPassword}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{ checked: classes.checked }}
                          />
                        }
                        label={t("rememberPasswordLabel")}
                      />
                      <Button simple color="primary" size="lg">
                        {t("forgotPasswordLabel")}
                      </Button>
                    </FormGroup>
                  </div>
                )}
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button
                  color="primary"
                  fullWidth
                  block
                  size="lg"
                  id="submitButtonID"
                  loading={this.props.isLoading}
                  onClick={this.validateForm}
                >
                  {this.props.isLogin ? t("loginLabel") : t("signUpActionText")}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }

}

SignUpForm.propTypes = {
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  isLogin:PropTypes.bool,
  requestLogin:PropTypes.func,
  requestSignUp:PropTypes.func,
  isLoading:PropTypes.bool,
  googleSignUp:PropTypes.func,
  errorData:PropTypes.object
};

export default withStyles(signupFormStyle)(SignUpForm);
