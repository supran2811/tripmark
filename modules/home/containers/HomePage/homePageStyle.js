import { container } from "../../../../assets/jss/material-kit-react";

const homePageStyle = theme => ({
  container:{
    ...container,
    top:"300px",
    [theme.breakpoints.down("sm")]:{
      top:"120px",
    },
    display:"flex",
    justifyContent:"center",
    overflowY:"visible",
    position:"absolute"
  },
  parrallexClass:{
    height:"80vh",
    [theme.breakpoints.down("sm")]:{
      height:"40vh"
    }
  },
  cityGrids:{
    ...container,
    marginTop:"20px"
  },
  autoComplete:{
    [theme.breakpoints.down("sm")] :{
      width:"90%"
    },
    width:"50%",
  }

});

export default homePageStyle;