import React , {Component} from 'react';
import {connect} from 'react-redux';
import NoSSR from 'react-no-ssr';
import { withStyles } from '@material-ui/core';
import Router from 'next/router';
import { loginRequest, googleSignUpRequest } from '../../../auth/store/action';

import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import SignUp from '../../../auth/components/SignUp';
import loginPageStyle from './loginPageStyle';
import { isAuthenticated } from '../../../auth/store/selector';
import { isLoading , getErrorData , hasError } from '../../../app/store/selector';
import { RESET_ERROR } from '../../../app/store/actionTypes';

class LoginPage extends Component {

  componentDidMount() {
    console.log("componentDidMount",this.props.isAuthenticated);
    
    this.props.dispatch({type:RESET_ERROR.ACTION});

    if(this.props.isAuthenticated) {
      Router.replace({pathname:'/home'});
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate",this.props.isAuthenticated);

    if(this.props.isAuthenticated) {
      Router.replace({pathname:'/home'});
    }
  }

  render() {

    const { classes } = this.props;
    const headerElementConfig = {
      headerElements : {
        'facebook':{
          type:'Tooltip',
          tooltipText:"this is a tooltip text on facebook",
          color:'transparent',
          icon:'fab fa-facebook'
        },
        'twitter':{
          type:'Tooltip',
          tooltipText:"this is a tooltip text on twitter",
          color:'transparent',
          icon:'fab fa-twitter'
        }
      }
    }
    return (
      <div>
          <Header
          absolute
          color="primary"
          brand="TripMark"
          rightLinks={<HeaderLinks {...headerElementConfig}/>}
        />
        <div className={classes.container}>
            <NoSSR> <SignUp isLogin 
                            requestLogin = { (email,password) => this.props.dispatch(loginRequest(email,password)) }
                            googleSignUp = { () => this.props.dispatch(googleSignUpRequest())}
                            isLoading = {this.props.loading}
                            hasError = {this.props.error}
                            errorData = {this.props.errorData} /> </NoSSR>
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => (
  {
    isAuthenticated: isAuthenticated(state),
    loading: isLoading(state),
    error: hasError(state),
    errorData: getErrorData(state)
  }
);

export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));