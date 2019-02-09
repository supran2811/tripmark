const appHeaderStyle = theme => ({
  appHeader: {
    position: "fixed",
    top:0,
    left:0,
    zIndex: 1200,
    width:"100%"
  },
  avatar: {
    margin: "0 10px",
    width: "30px",
    height: "30px",
    [theme.breakpoints.down("sm")]:{
      margin: "10px 20px",
      width: "45px",
      height: "45px",
    }
  },
  autocomplete: {
    width:"100%"
  }
});

export default appHeaderStyle;
