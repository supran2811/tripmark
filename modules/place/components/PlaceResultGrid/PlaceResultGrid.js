import React , { Component } from 'react';

import GridItem from '../../../../components/GridItem';
import PlaceThumbnailView from '../PlaceThumbnailView';

class PlaceResultGrid extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { places } = nextProps;
    return (places != this.props.places);
  }

  render() {
    const { places } = this.props;

    const placesToRender = places ? places.map( place => {
      console.log("placesToRender",place);
      return <GridItem xs = {3} key={place['id']}>
               <PlaceThumbnailView 
                 onMainClick = { placeId => this.openPlaceDetails(placeId) }
                 onBookmarkClick = { placeId => this.bookmarkPlace(placeId)}
                 place={place} />
             </GridItem>
             
       }) : null;

       return placesToRender;
  }
  openPlaceDetails = placeId => {
    console.log("Inside openPlaceDetails ",placeId);
    window.open(`${window.location.origin}/place/${placeId}`,"_blank");
  }
  
  bookmarkPlace = placeId => {
    console.log("Inside bookmarkPlace ",placeId);
  }
}

export default PlaceResultGrid;