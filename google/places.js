import { List } from 'immutable';
import _ from 'lodash';

import categories from './category.json';

export const getPlaceDetails = (google , mapRef , placeId) => {
  return new Promise( (resolve , reject) => {
    console.log("Inside getPlaceDetails",google,placeId);
    const service = new google.maps.places.PlacesService(mapRef);
    service.getDetails({placeId:placeId}, 
                            (place , status) => { 
                              console.log("Response Google PlaceService", place,status);
                               if(place && status == google.maps.places.PlacesServiceStatus.OK){
                                resolve(place);
                               }
                               else {
                                 reject(status);
                               }
                               
                            });
  })
  
}

export const getOptimalBGImageUrl = (photos = [] , maxWidth) => {
  let url = "";
  if(List.isList(photos)) {
    for(let photo of photos) {
      if(photo.get('width') >= maxWidth) {
        url = photo.get('getUrl')({maxWidth:maxWidth});
        break;
      }
    }

    if(url === '' && photos.size > 0) {
      url = photos[0].get('getUrl')({maxWidth :maxWidth});
    }
  }
  else {
    for(let photo of photos) {
      if(photo['width'] >= maxWidth) {
        url = photo.getUrl({maxWidth:maxWidth});
        break;
      }
    }

    if(url === '' && photos.length > 0) {
      url = photos[0].getUrl({maxWidth :maxWidth});
    }
  }
  return url;
}

export function getPhotoUrl (photoReference , maxHeight) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxheight=${maxHeight}&photoreference=${photoReference}&key=${process.env._GOOGLE_API_KEY}`
}

export const filterCategory = _.memoize(filter);

 function filter(query) {

  const term = query ? query.get ? query.get('term'): query : ''; 

  if(term.length == 0 ){
    return categories.slice(0,5);
  }
  else {
    console.log("Inside filter",categories);
    let count = 0;
    return categories.filter(category => {
      const keep =
          count < 5 && category.label.slice(0, term.length).toLowerCase() === term;

      if (keep) {
        count += 1;
      }
      return keep;
    });
  }
}