import { container } from "../../../../assets/jss/material-kit-react";

const addNewPlaceStyle = theme => ({
  container:{
    ...container,
    marginTop:"120px",
    [theme.breakpoints.down("sm")]:{
      padding:"0px 0px"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  labelStyle : {
    marginTop : "30px"
  }
});

export default addNewPlaceStyle;