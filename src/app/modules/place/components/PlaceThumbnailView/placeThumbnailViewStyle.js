import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from "../../../../assets/jss/material-kit-react";

const placeThumbnailView = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    position:"relative",
    [theme.breakpoints.down("sm")]:{
      height:200
    },
    minHeight: 280
  },
  mediaContent:{
    position:"absolute",
    bottom:"10px",
    left:"20px",
    color:"#fff"
  },
  actions: {
    display: "flex",
    marginTop:"-20px"
  },
  blankSpace :{
    width:1,
    height:"1.8em",
    marginTop:"10px"
  },
  spacing:{
    marginTop:"10px"
  },
  cardContent:{
    position:"relative",
    marginLeft:"-5px"
  },
  bookmarkIcon:{
    position:"absolute",
    top:"8px",
    right:"10px"
  }
});

export default placeThumbnailView;
