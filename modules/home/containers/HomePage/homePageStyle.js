import { container } from "../../../../assets/jss/material-kit-react";

const homePageStyle = theme => ({
  container:{
    ...container,
    marginTop:"120px"
  },
  avatar: {
    margin:"0 10px",
    width:"30px",
    height:"30px"
  },
  button:{
    position:"absolute",
    bottom:"30px",
    right:"60px"
  }

});

export default homePageStyle;