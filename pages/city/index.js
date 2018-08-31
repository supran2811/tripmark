import { Component } from 'react';

import { withI18next } from '../../lib/withI18next';
import CityHome from '../../modules/place/containers/CityHome';
import { getQueryParam } from '../../lib/utils';

class CityPage extends Component {
  
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
    return <CityHome query  = {this.state.query} />
  }
}

export default (withI18next(['placedata','common'])(CityPage));