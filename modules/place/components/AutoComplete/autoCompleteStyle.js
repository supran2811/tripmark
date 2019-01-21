const autoCompleteStyle = theme => ({
  autoComplete: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    position: "relative",
    // width: "80%",
    width:"90%",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]:{
      width:"100%",
      marginTop: "2px"
    }
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },

  bootstrapRoot: {
    padding: 0,
    width: "100%"
  },
  bootstrapInput: {
    borderTopLeftRadius:"10px",
    borderBottomLeftRadius:"10px",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: "inherit",
    padding: "10px 10px",
    width: "100%",
    height: "35px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: "inherit",
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.01rem rgba(0,123,255,.25)"
    },
    [theme.breakpoints.down("sm")]:{
      height: "35px",
    }
  },
  menuItem: {
    height: "100%"
  },
  menuItemContent: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    textDecoration: "none",
    width:"100%"
  },
  menuItemBody: {
    display: "block",
    paddingLeft: "20px",
    width:"100%"
  },
  mainContent: {
    fontSize: 16,
    color: "#000",
    width:"70%",
    maxWidth:"70%",
    overflow:"hidden",
    textOverflow:"ellipsis"
  },
  secondaryContent: {
    fontSize: 12,
    color: "#777",
    width:"70%",
    maxWidth:"70%",
    overflow:"hidden",
    textOverflow:"ellipsis"
  },
  buttonStyle: {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    marginLeft:"-1px",
    marginTop:"8px"
  },
  iconStyle: {
    marginTop: "-5px"
  }
});
export default autoCompleteStyle;
