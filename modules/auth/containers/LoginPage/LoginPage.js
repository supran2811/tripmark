import React , {Component} from 'react';
import NoSSR from 'react-no-ssr';
import { withStyles } from '@material-ui/core';
import { Apps } from '@material-ui/icons';

import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import SignUp from '../../../auth/components/SignUp';
import loginPageStyle from './loginPageStyle';

class LoginPage extends Component {
  render() {

    const { classes } = this.props;
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
            <NoSSR> <SignUp isLogin /> </NoSSR>
        </div>
      </div>

    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);