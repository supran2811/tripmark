/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import Link from 'next/link'
import _ from 'lodash';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown";
import Button from "../CustomButtons";

import headerLinksStyle from "./headerLinksStyle";

/***
 * 
 * {
 *    linkname : {
 *                      icon:'',
 *                      childrens: [
 *                        {
 *                          text : 'linkname',
 *                          href : 'url',
 *                          isExternal: true/false
 *                        }
 *                      ],
 *                      href: '', 
 *                      type:'', /// DropDown , Button or Tooltip
 *                      isExternal:'' /// true or false,
 *                      tooltipText : '',
  *                     color:''
 *                }
 * }
 * 
 */


function HeaderLinks({ ...props }) {
  const { classes , headerElements } = props;

  const headers = _.keys(headerElements).map(elementName => {
    const elementObject = headerElements[elementName];
    if(elementObject['type'] === 'Button') {
      if(elementObject['isExternal']){
        return <ListItem key={elementName} className={classes.listItem}>
                <Button
                  href={elementObject['href']}
                  color={elementObject['color']}
                  target="_blank"
                  className={classes.navLink}
                >
                  {elementObject['icon']}{elementName}
              </Button>
              </ListItem>
      }
      else {
        return <ListItem key={elementName} className={classes.listItem}>
                <Link href={elementObject['href']}>
                  <Button
                    color={elementObject['color']}
                    target="_blank"
                    className={classes.navLink}
                  >
                    {elementObject['icon']}{elementName}
                </Button>
                </Link>
                </ListItem>
      }
      
    }
    else if(elementObject['type'] === 'DropDown') {

      const dropDownElements = elementObject['childrens'];
      const elements = dropDownElements.map(ele => {
        if(ele['isExternal']){
          return <a href={ele['href']} 
                    target="_blank"
                    className={classes.dropdownLink}>
                      {ele['text']}
                 </a>
        }
        else {
          return <Link href = {ele['href']} 
                      className={classes.dropdownLink}>
                      {ele['text']}
                 </Link>
        }
      });

      return <ListItem key={elementName} className={classes.listItem}>
                <CustomDropdown
                  noLiPadding
                  buttonText={elementName}
                  buttonProps={{
                    className: classes.navLink,
                    color: elementObject['color']
                  }}
                  buttonIcon={elementObject['icon']}
                  dropdownList={elements}
                />
           </ListItem>
    }
    else if(elementObject['type'] === 'Tooltip') {
        return <ListItem className={classes.listItem}  key={elementName} >
                  <Tooltip
                    id={elementObject['icon']}
                    title={elementObject['tooltipText']}
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                      <Button
                        color={elementObject['color']}
                        target="_blank"
                        className={classes.navLink}
                      >
                      <i className={ `${classes.socialIcons} ${elementObject['icon']}` } />
                    </Button>
                  </Tooltip>
                </ListItem>
    }
  });
  return (
    <List className={classes.list}>
      {headers}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
