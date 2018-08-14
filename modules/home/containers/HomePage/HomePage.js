import React , { Component } from 'react';
import {connect} from 'react-redux';
import { translate } from 'react-i18next';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';

import withAuth from '../../../../lib/withAuth';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import { auth } from '../../../../firebase';
import { logoutRequest } from '../../../auth/store/action';
import { isAuthenticated } from '../../../auth/store/selector';
import homePageStyle from './homePageStyle';
import { getNameInitials } from '../../../../lib/utils'

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

    const {classes , t} = this.props;

    const displayName = auth.getUserName();

    const profileImageUrl = auth.getProfilePhotoUrl();

    console.log("HOMEPAGE::: displayName",displayName,"profileImageUrl",profileImageUrl ,getNameInitials(displayName));

    const avatar = (profileImageUrl === "" || profileImageUrl == null) ? 
                        (<Avatar className={classes.avatar}> {getNameInitials(displayName)} </Avatar>) : 
                          (<Avatar  src={profileImageUrl} className={classes.avatar}/>);

    const headerElementConfig = {
      headerElements : {
        [displayName] : {
          avatar: avatar,
          childrens: [
            {
              text : t('yourProfileText'),
              href : '/url',
              isExternal: false,
            },
            {
              text :  t('logoutText'),
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
export default connect(mapStatetoProps)(withAuth(translate(['common'])(withStyles(homePageStyle)(HomePage))));