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

    console.log("PlaceResultList:::: render::::",places);

    const placesToRender = places ? places.map( place => {
      console.log("placesToRender",place);
      return <GridItem xs = {3} key={place['place_id']}>
               <PlaceThumbnailView 
                 onMainClick = {this.openPlaceDetails}
                 onBookmarkClick = {this.toggleBookmark}
                 place={place} />
             </GridItem>
             
       }) : null;

       return placesToRender;
  }
  openPlaceDetails = placeId => {
    console.log("Inside openPlaceDetails ",placeId);
    window.open(`${window.location.origin}/place/${placeId}`,"_blank");
  }
  
  toggleBookmark = (place , remove) => {
    console.log("Inside bookmarkPlace ",place);
    remove ? 
          this.props.onRemoveBookmarkClick(place['place_id']) : 
                                  this.props.onBookmarkClick(place);
  }
}

export default PlaceResultGrid;