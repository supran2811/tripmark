const autoCompleteStyle = theme => ( {

  autoComplete: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
    
  },

  bootstrapRoot: {
    padding: 0,
    width:'100%'
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'inherit',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  menuItem:{
    height:"100%"
  },
  menuItemContent:{
    display:"flex",
    alignItems:"center",
    alignContent:"center",
    height:"100%",
    width:"100%",
    textDecoration:"none"
  },
  menuItemBody: {
    display:"block",
    paddingLeft:"20px"
  },
  mainContent:{
    fontSize: 16,
    color:"#000"
  },
  secondaryContent:{
    fontSize: 12,
    color:"#777"
  }
}
)
export default autoCompleteStyle;