import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from "../../../../assets/jss/material-kit-react";

const photoViewStyle = theme => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: "20000",
    position: "fixed",
    top: 0,
    left: 0
  },
  photoListContainer: {
    listStyleType: "none",
    width: "100%",
    height: "100%",
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    justifyContent: "space-between"
  },
  photoContainer: {
    height: "100%",
    width: "100%"
  },
  image: {
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    },
    width: "50%",
    height: "70%"
  },
  iconStyle: {
    fontSize: 50,
    color: "#fff"
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10
  }
});

export default photoViewStyle;
