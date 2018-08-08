import React , {Component} from 'react';

// @material-ui/core components
import { withStyles } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from 'validator';

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";

import GoogleLogin ,{ FontAwesome } from 'react-google-login';
import { translate } from 'react-i18next';

import GridContainer from '../../../../components/GridContainer'
import GridItem from '../../../../components/GridItem';
import Card , {CardBody , CardFooter , CardHeader} from '../../../../components/Card';
import CustomInput from '../../../../components/CustomInput';
import signupFormStyle from './signupFormStyle';
import Button from '../../../../components/CustomButtons';
import { clientId } from '../../constants';

class SignUpForm extends Component {

  state = {
    cardAnimation:'cardHidden',
    enableSubmit:false,
    name:'',
    email:'',
    password:'',
}

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  

  onChangeName = (e) => {
    console.log(e);
    this.setState({name:e.target.value});
  }

  onChangeEmail = (e) => {
    this.setState({email : e.target.value});
  }

  onChangePassword = (e) => {
    this.setState({password : e.target.value});
  }

  enableSubmit() {
    return this.state.name.trim().length > 0 && 
                this.state.email.trim().length > 0 && validator.isEmail(this.state.email)
                  this.state.password.trim().length > 5
  }

  render () {
    const { classes ,t} = this.props;
    return (
      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={10}>
        <Card className={classes[this.state.cardAnimaton]}>
          <form className={classes.form}>
          <CardHeader className = {classes.cardHeader}>
          {/* <GoogleLogin
              clientId={clientId}
              buttonText={t("loginLabel")}
              onSuccess={(response) => this.responseGoogle(response)}
              onFailure={(response) => this.responseGoogle(response)}
              className={classes.googleLogin}
            >
                <span> <i className={classes.socialIcons + " fab fa-google"} /> { this.props.isLogin ? t("googleLoginText") : t("googleSignUpText") }</span>
            </GoogleLogin> */}
            <Button className={classes.googleLogin} onClick={this.props.googleSignUp}>
                <span> <i className={classes.socialIcons + " fab fa-google"} /> { this.props.isLogin ? t("googleLoginText") : t("googleSignUpText") }</span>
            </Button>
          </CardHeader>
          <CardBody>
            {
              !this.props.isLogin ? 
                  <CustomInput
                    labelText={t("enterNameInputPlaceholder")}
                    id="first"
                    value = {this.state.name}
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
                  /> : null
            }
            <CustomInput
                labelText={t("emailnputPlaceholder")}
                id="email"
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
                labelText={t("passwordInputPlaceholder")}
                id="pass"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutline
                        className={classes.inputIconsColor}
                      />
                    </InputAdornment>
                  ),
                  onChange: this.onChangePassword
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg" onClick={() =>  this.props.requestSignUp(this.state.name,this.state.email,this.state.password)  } disabled={!this.enableSubmit()}>
               {this.props.isLogin ? t("loginLabel") : t("signUpActionText")}
              </Button>
            </CardFooter>
          </form>
        </Card>
        </GridItem>
      </GridContainer>
    );
  }

  responseGoogle = (response) => {
    console.log(response);
  }
}

export default withStyles(signupFormStyle)(translate(['authdata'])(SignUpForm));