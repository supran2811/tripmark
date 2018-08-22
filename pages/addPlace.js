import React , { Component } from 'react';

import AddNewPlace from '../modules/place/containers/AddNewPlace';

import { withI18next } from '../lib/withI18next';

class AddPlace extends Component {
  
  render() {
    return <AddNewPlace />
  }
}

export default ((withI18next(['common'])((AddPlace))));