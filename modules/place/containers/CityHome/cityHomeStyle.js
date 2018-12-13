import { container } from "../../../../assets/jss/material-kit-react";

const cityHomeStyle = theme => ({
  container: {
    ...container,
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  content: {
    margin: "20px 0px"
  },
  addPlaceButton: {
    backgroundColor: "#fff",
    margin: "20px",
    zIndex: 1100,
    color: "#000"
  },
  parrallexClass:{
    height:"50vh",
  },
  myAddFavAction: {
    position: "fixed",
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }
});

export default cityHomeStyle;
