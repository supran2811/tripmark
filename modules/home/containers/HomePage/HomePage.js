import React , { Component } from 'react';
import {connect} from 'react-redux';
import { translate } from 'react-i18next';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Geosuggest from 'react-geosuggest';
import LocationCity from  '@material-ui/icons/LocationCity'

import GridContainer from '../../../../components/GridContainer';
import withAuth from '../../../../lib/withAuth';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import { auth } from '../../../../firebase';
import { logoutRequest } from '../../../auth/store/action';
import { isAuthenticated } from '../../../auth/store/selector';
import homePageStyle from './homePageStyle';
import { getNameInitials } from '../../../../lib/utils'
import GridItem from '../../../../components/GridItem';
import withGoogleMap from '../../../../lib/withGoogleMap';

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

    const {classes , t } = this.props;

    const displayName = auth.getUserName();

    const profileImageUrl = auth.getProfilePhotoUrl();

    const avatar = (profileImageUrl === "" || profileImageUrl == null) ? 
                        (<Avatar className={classes.avatar}> {getNameInitials(displayName)} </Avatar>) : 
                          (<Avatar  src={profileImageUrl} className={classes.avatar}/>);

    const rightHeaderElementConfig = {
      headerElements : {
        [displayName] : {
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
    };

    Router.prefetch('/city');
    
    return (

      <div>
        <Header
          color="primary"
            brand={t('common:appName')}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            rightLinks={<HeaderLinks { ...rightHeaderElementConfig }/>}
          />
          <GridContainer className={classes.container}>
            <GridItem xs = {12}>
             <Geosuggest types={['(cities)']} 
                inputClassName={classes.suggestInput}
                suggestsClassName={classes.suggestList}
                suggestsHiddenClassName={classes.suggestHiddenList}
                renderSuggestItem = {(item) => this.renderSuggestItem(item,classes)}
                placeholder={t("searchBoxPlaceHolder")}
                onSuggestSelect={this.onSuggestSelect}/>
            </GridItem>
            <div ref='map'></div>
          </GridContainer>
      </div>
    );
  }

  renderSuggestItem(item,classes) {
    console.log("Inside renderSuggestItem",item);
    return (
      <div className = {classes.suggestItemClassName}>
          <LocationCity color='primary' /> <span className={classes.label}>{item.label}</span>
      </div>
    );
  }

  onSuggestSelect = (item) => {
    console.log("Inside onSuggestSelect ",item);
    item && Router.push({ pathname : '/city' , query:{id:item.placeId}});
  }
}
const mapStatetoProps = state => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);
export default connect(mapStatetoProps)(withAuth(translate(['homedata','common'])(withStyles(homePageStyle,{withTheme:true})( withGoogleMap( HomePage )))));