import React, { Component } from "react";
import PropTypes from "prop-types";

class PaginationComponent extends Component {

  static propTypes = {
    onPagination:PropTypes.func,
    loading:PropTypes.bool
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && this.props.children && !this.props.loading) {
      this.props.onPagination();
    }
  }

  render() {
    return this.props.children;
  }
}

export default PaginationComponent;