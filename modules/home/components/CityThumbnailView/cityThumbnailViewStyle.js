const cityThumbnailViewStyle =  theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    [theme.breakpoints.down("sm")]:{
      height:200
    },
    height: 280
  },
  actions: {
    display: "flex"
  }
});

export default cityThumbnailViewStyle;