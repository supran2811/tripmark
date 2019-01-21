import { container, title } from "../../../../assets/jss/material-kit-react";

const landingPageStyle = theme => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  parrallexClass:{
    overflow: "auto ",
    height: "100vh",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "2rem",
    minHeight: "2rem",
    color: "#FFFFFF",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.8rem",
      marginTop:"8rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:"1.5rem",
      marginTop:"12rem"
    }
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  welcomeSection: {
    paddingLeft:"2rem",
    paddingTop:"2rem"
  }
});

export default landingPageStyle;
