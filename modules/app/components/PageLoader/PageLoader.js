import React, { Component } from "react";
import PropTypes from "prop-types";

import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

class PageLoader extends Component {
  render() {

    const { type } = this.props;

    return (type && type === "circular")
      ? <CircularProgress color="secondary" />
      : <LinearProgress color="secondary" />;
  }
}

PageLoader.propTypes = {
  type: PropTypes.string
};

export default PageLoader;
