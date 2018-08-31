import React , { Component } from 'react';

import AddNewPlace from '../../modules/place/containers/AddNewPlace';
import { withI18next } from '../../lib/withI18next';

class AddPlace extends Component {

  state = {
    query:''
  }

  componentDidMount() {
     if(window && window.location.search && this.state.query !== window.location.search ) {
        this.setState({ query : window.location.search});
     }
  }

  componentDidUpdate() {
    if(window && window.location.search && this.state.query !== window.location.search ) {
      this.setState({ query : window.location.search});
   }
  }


  render() {
    return <AddNewPlace query = {this.state.query }  />
  }
}

export default withI18next(['placedata','common'])(AddPlace);