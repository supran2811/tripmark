import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core";

import { Router } from "../../../../../routes";
import { auth } from "../../../../lib/firebase";
import { getNameInitials } from "../../../../lib/utils";
import Header from "../../../../components/Header";
import HeaderLinks from "../../../../components/HeaderLinks";
import appHeaderStyle from "./appHeaderStyle";
import GoogleAutoComplete from "../../../../components/GoogleAutoComplete";
import defaultProfilePhoto from "../../../../assets/img/profilephoto.png";

export class AppHeader extends Component {

  render() {
    const { classes, t, googleAutoComplete, selectedCityName , user , isAuthenticated , noLinks } = this.props;

    const displayName = (user && user.username) ||  auth.getUserName() ;

    const profileImageUrl = (user && user.profilePhotoUrl) || auth.getProfilePhotoUrl();


    let avatar;

    if(isAuthenticated) {
      avatar =
      profileImageUrl === "" || profileImageUrl == null ? (
        <Avatar className={classes.avatar}>
          {" "}
          {getNameInitials(displayName)}{" "}
        </Avatar>
      ) : (
        <Avatar src={profileImageUrl} className={classes.avatar} />
      );

    }
    else {
      avatar = <Avatar src={defaultProfilePhoto} className={classes.avatar} />;
    }
    
    let headerElementConfig = this.props.rightLinks;
    let drawerElementConfig =this.props.rightLinks;
    if(!noLinks) {
      if (!headerElementConfig) {
        headerElementConfig = {
          headerElements: {
            // facebook: {
            //   type: "Tooltip",
            //   tooltipText: "this is a tooltip text on facebook",
            //   color: "transparent",
            //   icon: "fab fa-facebook"
            // },
            // twitter: {
            //   type: "Tooltip",
            //   tooltipText: "this is a tooltip text on twitter",
            //   color: "transparent",
            //   icon: "fab fa-twitter"
            // }
          }
        };
  
        if (!isAuthenticated) {
          headerElementConfig.headerElements[t("common:loginText")] = {
            icon: "",
            type: "Button",
            isExternal: false,
            href: "/login",
            toolTipText: "",
            color: "transparent"
          };
        } else if (displayName) {
          headerElementConfig.headerElements[displayName] = {
            avatar: avatar,
            childrens: [
              {
                text: t("common:yourProfileText"),
                href: "/url",
                isExternal: false
              },
              {
                text: t("common:logoutText"),
                isExternal: false,
                handleClick: this.props.logOut
              }
            ],
            href: "",
            type: "DropDown", /// DropDown , Button or Tooltip
            isExternal: false, /// true or false,
            tooltipText: "",
            color: "transparent"
          };
        }
      }
  
      
      if (!drawerElementConfig) {
        if (displayName) {
          drawerElementConfig = {
            headerElements:{
              [displayName] : {
                avatar: avatar,
                href: "",
                type: "Button", /// DropDown , Button or Tooltip
                isExternal: false, /// true or false,
                tooltipText: "",
                color: "transparent"
              },
              [t("common:logoutText")]:{
                icon: "",
                type: "Button",
                isExternal: false,
                handleClick: this.props.logOut,
                toolTipText: "",
                color: "transparent"
              }
            }
          };
        }
        else {
          drawerElementConfig = {
            headerElements:{
              [t("common:loginText")] : {
                avatar: avatar,
                href: "/login",
                type: "Button", /// DropDown , Button or Tooltip
                isExternal: false, /// true or false,
                tooltipText: "",
                color: "transparent"
              }
            }
          };
        }
      }
    }
    

    return (
      <div className={classes.appHeader}>
       
        <Header
          color={this.props.color}
          brand={this.props.headerTitle || t("common:appName")}
          fixed={this.props.fixed}
          backNavigation={this.props.backNavigation}
          changeColorOnScroll={this.props.changeColorOnScroll}
          rightLinks={<HeaderLinks {...headerElementConfig} />}
          drawerLinks = {drawerElementConfig ? <HeaderLinks {...drawerElementConfig} /> : undefined}>
         
          { googleAutoComplete && (
            <div className = {classes.autocomplete}>
              <GoogleAutoComplete
                searchTypes={["(cities)"]}
                onSuggestSelect={this.onSuggestSelect}
                t={t}
                initialValue={selectedCityName}
              />
            </div>
            
          ) }
        </Header>
      </div>
    );
  }

  onSuggestSelect = item => {
    item && Router.pushRoute("city", { cityId: item.placeId });
  };
}

AppHeader.propTypes = {
  color: PropTypes.string.isRequired,
  fixed: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  changeColorOnScroll: PropTypes.object,
  selectedCityName: PropTypes.string,
  headerTitle: PropTypes.string,
  rightLinks: PropTypes.object,
  classes:PropTypes.object.isRequired,
  googleAutoComplete:PropTypes.bool,
  t:PropTypes.func.isRequired,
  logOut:PropTypes.func,
  user : PropTypes.object,
  backNavigation:PropTypes.bool,
  noLinks:PropTypes.bool
};

export default withStyles(appHeaderStyle)(AppHeader);
