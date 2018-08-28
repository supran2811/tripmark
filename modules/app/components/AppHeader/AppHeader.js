import React , { Component } from 'react';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Router from 'next/router';

import { auth } from '../../../../firebase';
import { logoutRequest } from '../../../auth/store/action';
import { getNameInitials } from '../../../../lib/utils'
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import appHeaderStyle from './appHeaderStyle';
import GoogleAutoComplete from '../../../../components/GoogleAutoComplete';

class AppHeader extends Component {
  render() {

    const { classes ,t , google , selectedCityName } = this.props;

    const displayName = auth.getUserName();

    const profileImageUrl = auth.getProfilePhotoUrl();

    const avatar = (profileImageUrl === "" || profileImageUrl == null) ? 
    (<Avatar className={classes.avatar}> {getNameInitials(displayName)} </Avatar>) : 
      (<Avatar  src={profileImageUrl} className={classes.avatar}/>);

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

    if(!this.props.isAuthenticated) {
      headerElementConfig.headerElements['Login'] = {
        icon : '',
        type:'Button',
        isExternal:false,
        href:'/login',
        toolTipText:'',
        color:'transparent'
      }
    }
    else if(displayName){
      headerElementConfig.headerElements[displayName] = {
        avatar: avatar,
        childrens: [
          {
            text : t('common:yourProfileText'),
            href : '/url',
            isExternal: false,
          },
          {
            text :  t('common:logoutText'),
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

    return (
              <div className = {classes.appHeader}>
                {google && (
                  <div className={classes.googleAutoComplete}>
                    <GoogleAutoComplete 
                        searchTypes = {['(cities)']}
                        onSuggestSelect = {this.onSuggestSelect}
                        t = {t}
                        initialValue = {selectedCityName}
                    />
                  </div>
                )}
                <Header
                color= {this.props.color}
                  brand={t('common:appName')}
                  fixed={this.props.fixed}
                  changeColorOnScroll={this.props.changeColorOnScroll}
                  rightLinks={<HeaderLinks { ...headerElementConfig }/>}
                />
                </div>)
  }

  onSuggestSelect = (item) => {
    console.log("Inside onSuggestSelect in header",item);
    item && Router.push({ pathname : '/city' , query:{id:item.placeId}});
  }
}

AppHeader.propTypes = {
  color:PropTypes.string.isRequired,
  fixed:PropTypes.bool,
  isAuthenticated:PropTypes.bool,
  changeColorOnScroll:PropTypes.object,
  selectedCityName:PropTypes.string
};


export default withStyles(appHeaderStyle)( AppHeader );
