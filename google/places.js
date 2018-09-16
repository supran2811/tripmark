


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
  for(let photo of photos) {
    if(photo.get('width') >= maxWidth) {
      url = photo.get('getUrl')({maxWidth:maxWidth});
      break;
    }
  }

  if(url === '' && photos.size > 0) {
    url = photos[0].get('getUrl')({maxWidth :maxWidth});
  }

  return url;
}

export function getPhotoUrl (photoReference , maxHeight) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxheight=${maxHeight}&photoreference=${photoReference}&key=${process.env._GOOGLE_API_KEY}`
}