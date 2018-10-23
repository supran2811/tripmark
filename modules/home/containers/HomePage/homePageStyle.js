import { container } from "../../../../assets/jss/material-kit-react";

const homePageStyle = theme => ({
  container:{
    ...container,
    transform:"translateY(60px)",
    [theme.breakpoints.down("sm")]:{
      transform:"translateY(40px)",
    },
    display:"flex",
    justifyContent:"center"
  },
  parrallexClass:{
    height:"80vh",
    [theme.breakpoints.down("sm")]:{
      height:"40vh"
    }
  },
  autoComplete:{
    [theme.breakpoints.down("sm")] :{
      width:"90%"
    },
    width:"50%",
  }

});

export default homePageStyle;