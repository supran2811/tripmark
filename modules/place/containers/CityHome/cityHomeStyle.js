import { container } from "../../../../assets/jss/material-kit-react";

const cityHomeStyle = {
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
    zIndex: 3500,
    color: "#000"
  }
};

export default cityHomeStyle;
