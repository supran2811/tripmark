import { container } from '../../../../assets/jss/material-kit-react';

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
  }
}

export default placeHomeStyle;