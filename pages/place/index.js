import { Component } from 'react';

import { withI18next } from '../../lib/withI18next';
import PlaceHome from '../../modules/place/containers/PlaceHome';

class PlacePage extends Component {
  state = {
    query:''
  }

  componentDidMount() {
     
     if(window && window.location.search && this.state.query !== window.location.search ) {
      console.log("Inside componentDidMount refreshing page!!");
        this.setState({ query : window.location.search});
     }
  }

  componentDidUpdate() {
    if(window && window.location.search && this.state.query !== window.location.search ) {
      console.log("Inside componentDidUpdate refreshing page!!");
      this.setState({ query : window.location.search});
   }
  }

  render() {
    return <PlaceHome query  = {this.state.query} />
  }
}

export default (withI18next(['placedata','common'])(PlacePage));