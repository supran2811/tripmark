import React , {Component} from 'react';
import {connect} from 'react-redux';
import NoSSR from 'react-no-ssr';
import Router from 'next/router';

import { withStyles } from '@material-ui/core';
import { translate } from 'react-i18next';

import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import landingBg from '../../../../assets/img/landing-bg.jpg';
import Parallax from '../../../../components/Parallax';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import landingPageStyle from './landingPageStyle';
import SignUpForm from '../../../auth/components/SignUp';
import { signUpRequest, googleSignUpRequest } from '../../../auth/store/action';
import { isAuthenticated, getPathToRedirect } from '../../../auth/store/selector';
import { isLoading , getErrorData , hasError } from '../../store/selector'; 
import { RESET_ERROR } from '../../store/actionTypes';

class LandingPage extends Component {

  componentDidMount() {
    console.log("componentDidMount",this.props.isAuthenticated);
    
    this.props.dispatch({type:RESET_ERROR.ACTION});

    if(this.props.isAuthenticated) {
      Router.replace({pathname:this.props.path});
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate",this.props.isAuthenticated);

    if(this.props.isAuthenticated) {
      Router.replace({pathname:this.props.path});
    }
  }

  render() {
    const { classes , t ,...rest } = this.props;
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
        },
        'Login' : {
          icon : '',
          type:'Button',
          isExternal:false,
          href:'/login',
          toolTipText:'',
          color:'transparent'
        }
      }
      
    }
    
    return (
      <div>
        <Header
         color="primary"
          brand={t('appName')}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          rightLinks={<HeaderLinks {...headerElementConfig}/>}
          {...rest}
        />
        <Parallax filter image={landingBg} className={classes.parrallexClass}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
              </GridItem>
              <GridItem xs={12} sm={12} md = {6}>
               <NoSSR> <SignUpForm 
                            requestSignUp = { (name,email,password) => this.props.dispatch(signUpRequest(name,email,password)) }
                            googleSignUp = { () => this.props.dispatch(googleSignUpRequest())}
                            isLoading = {this.props.loading}
                            hasError = {this.props.error}
                            errorData = {this.props.errorData}/> </NoSSR>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    isAuthenticated: isAuthenticated(state),
    loading: isLoading(state),
    error: hasError(state),
    errorData: getErrorData(state),
    path:getPathToRedirect(state)
  }
);

export default connect(mapStateToProps)(withStyles(landingPageStyle)(translate(['common'])((LandingPage))));