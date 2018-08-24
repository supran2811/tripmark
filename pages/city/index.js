import { Component } from 'react';

import { withI18next } from '../../lib/withI18next';
import CityHome from '../../modules/place/containers/CityHome';

class CityPage extends Component {
  
  state = {
    id: ''
  }

  componentDidMount() {
    const { search } = window.location;
    let id = '';
    if(search && search.indexOf('=') > -1) {
      id = search.split('=')[1];
    }
    if(id !== this.state.id) {
      this.setState({id : id});
    }

  }

  componentDidUpdate() {
    const { search } = window.location;
    let id = '';
    if(search && search.indexOf('=') > -1) {
      id = search.split('=')[1];
    }

    if(id !== this.state.id) {
      this.setState({id : id});
    }
  }
  
  render() {
   return <CityHome id = {this.state.id}/>;
  }
}

export default (withI18next(['common'])(CityPage));