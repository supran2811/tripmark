import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core";
import { Router } from "../../../../routes";

import { auth } from "../../../../firebase";
import { getNameInitials } from "../../../../lib/utils";
import Header from "../../../../components/Header";
import HeaderLinks from "../../../../components/HeaderLinks";
import appHeaderStyle from "./appHeaderStyle";
import GoogleAutoComplete from "../../../../components/GoogleAutoComplete";

class AppHeader extends Component {

  render() {
    const { classes, t, google, selectedCityName } = this.props;

    const displayName = auth.getUserName();

    const profileImageUrl = auth.getProfilePhotoUrl();

    const avatar =
      profileImageUrl === "" || profileImageUrl == null ? (
        <Avatar className={classes.avatar}>
          {" "}
          {getNameInitials(displayName)}{" "}
        </Avatar>
      ) : (
        <Avatar src={profileImageUrl} className={classes.avatar} />
      );

    let headerElementConfig = this.props.rightLinks;
    if (!headerElementConfig) {
      headerElementConfig = {
        headerElements: {
          facebook: {
            type: "Tooltip",
            tooltipText: "this is a tooltip text on facebook",
            color: "transparent",
            icon: "fab fa-facebook"
          },
          twitter: {
            type: "Tooltip",
            tooltipText: "this is a tooltip text on twitter",
            color: "transparent",
            icon: "fab fa-twitter"
          }
        }
      };

      if (!this.props.isAuthenticated) {
        headerElementConfig.headerElements["Login"] = {
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

    return (
      <div className={classes.appHeader}>
       
        <Header
          color={this.props.color}
          brand={this.props.headerTitle || t("common:appName")}
          fixed={this.props.fixed}
          changeColorOnScroll={this.props.changeColorOnScroll}
          rightLinks={<HeaderLinks {...headerElementConfig} />}>
          { google && (
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
  google:PropTypes.object,
  t:PropTypes.func.isRequired,
  logOut:PropTypes.func
};

export default withStyles(appHeaderStyle)(AppHeader);
