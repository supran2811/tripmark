import { List } from "immutable";
import _ from "lodash";

import categories from "./category.json";

export const getPlaceDetails = (google, mapRef, placeId) => {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(mapRef);
    service.getDetails({ placeId: placeId }, (place, status) => {
      if (place && status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(place);
      } else {
        reject(status);
      }
    });
  });
};

export function openInGoogleMap(placeId , address) {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}&query_place_id=${placeId}`,
    "_blank"
  );
}

export const getOptimalBGImageUrl = (photos = [], maxWidth) => {
  let url = "";
  if (List.isList(photos)) {
    for (let photo of photos) {
      if (photo.get("width") >= maxWidth) {
        url = getMaxWidthPhotoUrl(photo.get("photo_reference"),maxWidth);
        break;
      }
    }

    if (url === "" && photos.size > 0) {
      url = getMaxWidthPhotoUrl(photos[0].get("photo_reference"),maxWidth);
    }
  } else {
    for (let photo of photos) {
      if (photo["width"] >= maxWidth) {
        url = getMaxWidthPhotoUrl(photo["photo_reference"],maxWidth);
        break;
      }
    }

    if (url === "" && photos.length > 0) {
      url = getMaxWidthPhotoUrl(photos[0]["photo_reference"],maxWidth);
    }
  }
  return url;
};

export function getPhotoUrl(photoReference, maxHeight) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxheight=${maxHeight}&photoreference=${photoReference}&key=${
    process.env._GOOGLE_API_KEY
  }`;
}

export const filterCategory = _.memoize(filter);

function filter(query) {
  
  const { term="" , type="text" } = query || { term:"" , type:"text" };

  if (term.length == 0 || type === "category") {
    return categories.slice(0, 5);
  } else {
    console.log("Inside filter", categories);
    let count = 0;
    return categories.filter(category => {
      const keep =
        count < 5 &&
        category.label.slice(0, term.length).toLowerCase() === term;

      if (keep) {
        count += 1;
      }
      return keep;
    });
  }
}

function getMaxWidthPhotoUrl(photoReference , maxWidth) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${
    process.env._GOOGLE_API_KEY
  }`;
}