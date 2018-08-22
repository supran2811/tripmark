import React , { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { translate } from 'react-i18next';

import HeaderLinks from '../../../../components/HeaderLinks';
import Header from '../../../../components/Header';
import withAuth from '../../../../lib/withAuth';
import addNewPlaceStyle from './addNewPlaceStyle';

class AddNewPlace extends Component {
  render() {

    const rightHeaderElementConfig = {
      headerElements : {
        'Close' : {
          href: '', 
          type:'Button', /// DropDown , Button or Tooltip
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
          brand="Add new place"
          fixed
          rightLinks={<HeaderLinks { ...rightHeaderElementConfig }/>}
        />



      </div>
    );
  }
}

export default withAuth( translate( ['common'] ) ( withStyles( addNewPlaceStyle )( AddNewPlace ) ));