import React , { Component } from 'react';
import withAuth from '../../../../lib/withAuth';

class HomePage extends Component {
  render() {
    return <h1>HOME PAGE</h1>
  }
}

export default withAuth( HomePage );