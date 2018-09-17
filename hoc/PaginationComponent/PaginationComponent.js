import React , { Component } from 'react';

class PaginationComponent extends Component {
  
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) 
                          && this.props.children && !this.props.loading) {
        console.log("HIT PAGINATION REQUEST!!!");
        this.props.onPagination();
      }
  }

  render() {
    return this.props.children;
  }
}

export default PaginationComponent;