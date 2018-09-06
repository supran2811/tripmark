import React , { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

class PageLoader extends Component {
  render() {
    return <LinearProgress color="secondary" />
  }
}

export default PageLoader;