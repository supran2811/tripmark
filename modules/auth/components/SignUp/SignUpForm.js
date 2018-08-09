import React , {Component} from 'react';

// @material-ui/core components
import { withStyles, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from 'validator';

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";

import { translate } from 'react-i18next';

import GridContainer from '../../../../components/GridContainer'
import GridItem from '../../../../components/GridItem';
import Card , {CardBody , CardFooter , CardHeader} from '../../../../components/Card';
import CustomInput from '../../../../components/CustomInput';
import signupFormStyle from './signupFormStyle';
import Button from '../../../../components/CustomButtons';

class SignUpForm extends Component {

  state = {
    cardAnimation:'cardHidden',
    enableSubmit:false,
    name:'',
    email:'',
    password:'',
    rememberPassword:false
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

  onChangeRememberPassword = e => {
    this.setState({rememberPassword:e.target.checked});
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
        <GridItem xs={12} sm={12} md={this.props.isLogin ? 12 : 10}>
        <Card className={classes[this.state.cardAnimaton]}>
          <form className={classes.form}>
          <CardHeader className = {classes.cardHeader}>
            <Button className= {this.props.isLogin ? classes.googleLogin : classes.googleSignUp }
                  onClick={this.props.googleSignUp}>
               <span></span>
           </Button>
          </CardHeader>
          <CardBody>
            {
              !this.props.isLogin ? 
                  <CustomInput
                    labelText={t("enterNameInputPlaceholder")}
                    id="name"
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
                id="password"
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
              {
                this.props.isLogin && 
                <FormGroup row>
                    <FormControlLabel
                      control = {<Checkbox 
                                    checked={this.state.rememberPassword}
                                     color="primary"
                                     value="rememberPassword"
                                     onChange = {this.onChangeRememberPassword}
                                />}
                      label="Remember Password"          
                      />
                     <Button simple color="info" size="lg">Forgot Password</Button>
                  </FormGroup>  
                
              }
              
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button color="primary" 
                      fullWidth
                      block
                      size="lg" 
                      onClick={() => this.props.isLogin ? this.props.requestLogin(this.state.email,this.state.password) : this.props.requestSignUp(this.state.name,this.state.email,this.state.password)  } 
                      disabled={!this.enableSubmit()}>
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