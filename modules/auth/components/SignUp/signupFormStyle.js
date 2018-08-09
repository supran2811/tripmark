import { container } from "../../../../assets/jss/material-kit-react.jsx";
import signupBg from '../../../../assets/img/google_signup.jpg';
import signinBg from '../../../../assets/img/google_signin.jpg';

const loginButtonStyle = {
     width:"80%",
    color:"#ffffff",
    fontWeight:"bold",
    borderRadius:"2px",
    border:"1px solid transparent",
    display:"inline-block",
    marginRight:"10px",
    padding:'15px',
    cursor:"pointer",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundOrigin:'border-box'
}

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    maxHeight: "1200px",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "100%",
    textAlign: "center",
    marginTop: "0px",
    marginBottom: "15px"
    
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  googleSignUp: {
    ...loginButtonStyle,
    backgroundImage:`url(${signupBg})`
  },
  googleLogin: {
    ...loginButtonStyle,
    backgroundImage:`url(${signinBg})`
  }
};

export default signupPageStyle;
