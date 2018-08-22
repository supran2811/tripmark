import React , { Component } from 'react';
import {connect} from 'react-redux';
import { translate } from 'react-i18next';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, Grid } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Search from "@material-ui/icons/Search"
import InputAdornment from "@material-ui/core/InputAdornment";

import GridContainer from '../../../../components/GridContainer';
import withAuth from '../../../../lib/withAuth';
import Header from '../../../../components/Header';
import HeaderLinks from '../../../../components/HeaderLinks';
import { auth } from '../../../../firebase';
import { logoutRequest } from '../../../auth/store/action';
import { isAuthenticated } from '../../../auth/store/selector';
import homePageStyle from './homePageStyle';
import { getNameInitials } from '../../../../lib/utils'
import CustomInput from '../../../../components/CustomInput';
import GridItem from '../../../../components/GridItem';

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

    const {classes , t , theme } = this.props;

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

    const leftHeaderElementConfig = {
      headerElements : {
        "Sample1" : {
          href: '/', 
          type:'Button', /// DropDown , Button or Tooltip
          isExternal:false, /// true or false,
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
            rightLinks={<HeaderLinks { ...rightHeaderElementConfig }/>}
            leftLinks={<HeaderLinks { ...leftHeaderElementConfig }/>}
          />
          <GridContainer className={classes.container}>
            <GridItem xs = {12}>
              <CustomInput
                labelText="Where are you planning to go?"
                id="search"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text",
                  startAdornment: (
                    <InputAdornment position = "start">
                      <Search/>
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
      </div>
    );
  }
}
const mapStatetoProps = state => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);
export default connect(mapStatetoProps)(withAuth(translate(['common'])(withStyles(homePageStyle,{withTheme:true})(HomePage))));