import React , {Component} from 'react';

// @material-ui/core components
import { withStyles } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";

import GoogleLogin ,{ FontAwesome } from 'react-google-login';

import GridContainer from '../../../../components/GridContainer'
import GridItem from '../../../../components/GridItem';
import Card , {CardBody , CardFooter , CardHeader} from '../../../../components/Card';
import CustomInput from '../../../../components/CustomInput';
import signupFormStyle from './signupFormStyle';
import Button from '../../../../components/CustomButtons';

class SignUpForm extends Component {

  clientId = "246403049091-2hdd7bv6h1fttt7mjf7ka2mudv861bni.apps.googleusercontent.com";

  state = {
    cardAnimation:'cardHidden'
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  
  render () {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
        <Card className={classes[this.state.cardAnimaton]}>
          <form className={classes.form}>
          <CardHeader>
          <GoogleLogin
              clientId={this.clientId}
              buttonText="Login"
              onSuccess={() => ""}
              onFailure={() => ""}
            >
                <span> <i className={classes.socialIcons + " fab fa-google"} /> Login with Google</span>
            </GoogleLogin>
          </CardHeader>
          <CardBody>
              <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Email..."
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
                  )
                }}
              />
              <CustomInput
                labelText="Password"
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
                  )
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg">
                Get started
              </Button>
            </CardFooter>
          </form>
        </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(signupFormStyle)(SignUpForm);