import React , { Component } from 'react';
import {connect} from 'react-redux';
import { translate } from 'react-i18next';
import { Apps } from '@material-ui/icons';
import Router from 'next/router';

import withAuth from '../../../../lib/withAuth';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import { auth } from '../../../../firebase';
import { logoutRequest } from '../../../auth/store/action';
import { isAuthenticated } from '../../../auth/store/selector';

class HomePage extends Component {

  componentDidMount() {
    if(!this.props.isAuthenticated) {
      Router.replace({pathname:'/login'});
    }
  }

  componentDidUpdate() {
    if(!this.props.isAuthenticated) {
      Router.replace({pathname:'/login'});
    }
  }

  render() {

    const {t} = this.props;

    const displayName = auth.getUserName();

    const headerElementConfig = {
      headerElements : {
        [displayName] : {
          icon: Apps,
          childrens: [
            {
              text : 'linkname1',
              href : '/url',
              isExternal: false,
            },
            {
              text : 'Log Out',
              href : '/url',
              isExternal: false,
              handleClick: () => this.props.dispatch(logoutRequest())
            }
          ],
          href: '', 
          type:'DropDown', /// DropDown , Button or Tooltip
          isExternal:false, /// true or false,
          tooltipText : '',
          color:'transparent'
        }
      }
    };

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
            rightLinks={<HeaderLinks { ...headerElementConfig }/>}
          />
        </div>
    );
  }
}
const mapStatetoProps = state => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);
export default connect(mapStatetoProps)(withAuth( translate(['common']) (HomePage) ));