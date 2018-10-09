import {
  container,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from "../../../../assets/jss/material-kit-react";

const placeHomeStyle = {
  container: {
    ...container,
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  addPlaceButton: {
    backgroundColor: "#fff",
    margin: "20px",
    zIndex: 3500,
    color: "#000"
  },
  mainContent: {
    margin: "10px 120px"
  },
  avatar: {
    width: "60px",
    height: "60px"
  },
  nameContainer: {
    display: "flex"
  },
  addressCard: {
    minHeight: 400
  },
  addressContent: {
    transform: "translateY(230px)"
  },
  addressActionArea: {
    transform: "translateY(200px)"
  },
  review: {
    padding: "20px 0",
    borderBottom: "1px solid " + primaryColor,
    display: "flex"
  },
  profileReview: {
    height: "100%",
    flexShrink: "0",
    marginRight: "10px"
  },
  reviewText: {}
};

export default placeHomeStyle;
