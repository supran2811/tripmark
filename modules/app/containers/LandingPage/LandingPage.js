import React , {Component} from 'react';
import {connect} from 'react-redux';
import NoSSR from 'react-no-ssr';
import { Apps } from '@material-ui/icons';
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
import { signUpRequest } from '../../../auth/store/action';


class LandingPage extends Component {

  render() {
    console.log("Landing page ",this.props);
    const { classes , t ,...rest } = this.props;
    const headerElementConfig = {
      headerElements : {
        
        'Sample2':{
          icon : Apps,
          type:'DropDown',
          color:'transparent',
          childrens:[
            {
              text:'Dropdown1',
              href:'http://www.google.com',
              isExternal:true
            },
            {
              text:'Dropdown2',
              href:'/',
              isExternal:true
            }
          ]
        },
        'Sample3':{
          type:'Tooltip',
          tooltipText:"this is a sample tooltip text",
          color:'transparent',
          icon:'fab fa-facebook'
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
               <NoSSR> <SignUpForm requestSignUp = { (name,email,password) => this.props.dispatch(signUpRequest(name,email,password)) }/> </NoSSR>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}
export default connect( state => state)(withStyles(landingPageStyle)(translate(['common'])((LandingPage))));