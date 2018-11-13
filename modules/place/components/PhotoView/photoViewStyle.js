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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "20000",
    position: "fixed",
    top: 0,
    left: 0
  },
  photoListContainer: {
    position:"relative",
    listStyleType: "none",
    width: "100%",
    height: "100%",
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]:{
      justifyContent:"flex-start"
    }
  },
  leftArrow:{
    [theme.breakpoints.down("sm")]:{
      position:"absolute",
      top:"50%" ,
      left:0
    }
  },
  rightArrow:{
    [theme.breakpoints.down("sm")]:{
      position:"absolute",
      top:"50%" ,
      right:0
    }
  },
  
  photoContainer: {
    height: "100%",
    width: "100%"
  },
  image: {
    [theme.breakpoints.down("sm")]:{
      width:"100%",
      height:"auto",
      marginLeft:"-20px"
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
    right: 10,
    zIndex:"22000"
  }
});

export default photoViewStyle;
