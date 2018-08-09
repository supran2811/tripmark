import React , {Component} from 'react';
import NoSSR from 'react-no-ssr';
import { withStyles } from '@material-ui/core';

import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import SignUp from '../../../auth/components/SignUp';
import loginPageStyle from './loginPageStyle';

class LoginPage extends Component {
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
            <NoSSR> <SignUp isLogin /> </NoSSR>
        </div>
      </div>

    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);