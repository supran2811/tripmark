import React , {Component} from 'react';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import landingBg from '../../../../assets/img/landing-bg.jpg';
import Parallax from '../../../../components/Parallax';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';

import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import landingPageStyle from './landingPageStyle';

class LandingPage extends Component {
  render() {

    const { classes , t } = this.props;
    const headerElementConfig = {
      headerElements : {
        'Sample1' : {
          icon : '',
          type:'Button',
          isExternal:false,
          toolTipText:'',
          color:'red'
        },
        'Sample2':{
          icon : '',
          type:'DropDown',
          color:'white',
          childrens:[
            {
              text:'Dropdown1',
              href:'www.google.com',
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
          icon:''
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
          rightLinks={<HeaderLinks  {...headerElementConfig}/>}
        />
        <Parallax filter image={landingBg}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}
export default withStyles(landingPageStyle)(translate(['common'])(LandingPage));