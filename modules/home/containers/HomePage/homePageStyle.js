import { container } from "../../../../assets/jss/material-kit-react";

const homePageStyle = theme => ({
  container:{
    ...container,
    position:"absolute",
    top:280,
    left:0,
    zIndex:100
  },
  autoComplete:{
    position:"absolute",
    width:"100%",
    zIndex:200,
    top:180,
    left:0
  }

});

export default homePageStyle;