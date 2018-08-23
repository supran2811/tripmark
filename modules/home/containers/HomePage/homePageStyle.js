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
  },

  suggestInput :  {
    width:'100%' , 
    border:`1px solid #BDBDBD` , 
    borderRadius:'50px' , 
    height:'50px' ,
    padding: '10px 20px',
    font:'inherit'
  },
  suggestList: {
    listStyle:'none',
    backgroundColor:'#fff',
    border: '1px solid #bdbdbd',
    maxHeight:'25em',
    transition: 'max-height 0.2s , border 0.2s',
    padding:'10px 20px',
    marginLeft:'20px',
    marginRight:'20px',
    marginTop:'-1px',
    borderTopWidth:0,
    overflowX:'hidden',
    overflowY:'auto'
  },
  suggestItemClassName:{
    padding:'10px 0px',
    cursor:'pointer',
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'flex-start',
    '&:hover':{
      backgroundColor:'#F5F5F5'
    }

  },
  label:{
    color:'#000',
    marginLeft:'10px'
  },
  suggestHiddenList: {
    maxHeight: 0,
    overflow: 'hidden',
    borderWidth: 0,
    height:0,
    padding:0
  }

});

export default homePageStyle;