import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import { Router } from "../../../routes";

import appIcon from "../../assets/img/appIcon.png";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";
// core components
import headerStyle from "./headerStyle";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  handleBackNavigation() {
    Router.back();
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute,
      children,
      drawerLinks,
      backNavigation
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = (
      <Link href="/mypage">
        <Button className={classes.title}>
          <img src={appIcon} className = {classes.appIcon}></img>
          <Hidden smDown implementation="css">
            {brand}
          </Hidden> 
        </Button>
      </Link>
    );
    const childrenComponent = children ? (
      <div className = {classes.childrens}>{children}</div>
    ) : null;
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <div>
                <Hidden smUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                  >
                    <Menu />
                  </IconButton>
                </Hidden>
                <Hidden smDown implementation="css">
                  <React.Fragment>
                    {brandComponent}
                    {childrenComponent}
                  </React.Fragment>
                </Hidden>
              </div>
            ) : (
              <React.Fragment>
                {
                  rightLinks &&
                  <div className = {classes.sidebar}>
                    <Hidden mdUp implementation="css">
                      { backNavigation ? 
                        <IconButton
                          color="inherit"
                          aria-label="go back"
                          onClick={this.handleBackNavigation}
                        >
                          <ArrowBack />
                        </IconButton> 

                        : drawerLinks ? <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          onClick={this.handleDrawerToggle}
                        >
                          <Menu />
                        </IconButton> : null
                      }
                    </Hidden>
                  </div>
                }
                {brandComponent}
                {childrenComponent}
              </React.Fragment>
            
            )}

          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
        </Toolbar>
        {
          drawerLinks 
            && 
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={"left"}
                open={this.state.mobileOpen}
                classes={{
                  paper: classes.drawerPaper
                }}
                onClose={this.handleDrawerToggle}
              >
                <div className={classes.appResponsive}>
                  {drawerLinks}
                </div>
              </Drawer>
            </Hidden>
        }
        

      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  drawerLinks:PropTypes.node,
  children: PropTypes.object,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  backNavigation:PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);
