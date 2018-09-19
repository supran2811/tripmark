import { container, 
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor } from '../../../../assets/jss/material-kit-react';

const placeHomeStyle = {
  container : {
    ...container,
    position:'relative',
    width:"100%",
    height:"100%",
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  addPlaceButton: {
    backgroundColor:"#fff",
    margin:"20px",
    zIndex:3500,
    color:"#000"
  },
  mainContent: {
    margin: "10px 20px"
  },
  avatar: {
    width:"60px",
    height:"60px"
  }
}

export default placeHomeStyle;