
import * as storageApi from "../../../lib/localStore";
import { setDeleteBookmark, setAddBookmark } from "./action";

const PREFIX_REMOVE_IDS       = "REMOVE_IDS:";
const PREFIX_ADDBOOKMARK_IDS  = "ADD_BOOKMARK_IDS:";

export function addRemovedPlaces( cityid , placeid) {
  storageApi.addItem( PREFIX_REMOVE_IDS+cityid+placeid , {cityid , placeid} );
}

export function addBookmarkedPlaces ( city , place ) {
  if(city) {
    storageApi.addItem( PREFIX_ADDBOOKMARK_IDS+city["place_id"]+place["place_id"] , {city,place} );
  }
}

export function handleStorageListener(e,dispatch) {
  if(e.key == storageApi._APP_LOCAL_DATA && e.newValue) {
    const obj = JSON.parse(e.newValue);
    Object.keys(obj).forEach(key => {
      if(key.startsWith(PREFIX_ADDBOOKMARK_IDS)){
        const {city,place} = obj[key];
        dispatch(setAddBookmark(city,place));
      }
      else {
        const {cityid , placeid} = obj[key];
        dispatch(setDeleteBookmark(cityid,placeid));
      }
    });
    storageApi.clearData();

  }
}

