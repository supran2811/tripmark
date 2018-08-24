


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