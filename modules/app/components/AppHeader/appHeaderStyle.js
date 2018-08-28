import zIndex from "@material-ui/core/styles/zIndex";

const appHeaderStyle = {
  appHeader : {
    position:'relative'
  },
  avatar: {
    margin:"0 10px",
    width:"30px",
    height:"30px"
  },
  googleAutoComplete : {
    position:'absolute',
    display:'flex',
    top:'30px',
    left: '200px',
    width:'300px',
    zIndex:3000
  }
}

export default appHeaderStyle;