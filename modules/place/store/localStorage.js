
import * as storageApi from "../../../lib/localStore";
import { setDeleteBookmark, setAddBookmark } from "./action";

const PREFIX_REMOVE_IDS       = "REMOVE_IDS:";
const PREFIX_ADDBOOKMARK_IDS  = "ADD_BOOKMARK_IDS:";

export function addRemovedPlaces( cityid , placeid) {
  storageApi.addItem( PREFIX_REMOVE_IDS+cityid+placeid , {cityid , placeid} );
}

export function addBookmarkedPlaces ( city , place ) {
  storageApi.addItem( PREFIX_ADDBOOKMARK_IDS+city["place_id"]+place["place_id"] , {city,place} );
}

export function handleStorageListener(e,dispatch) {
  if(e.newValue !== null) {
    if(e.key.startsWith(PREFIX_REMOVE_IDS)) {
      const {cityid , placeid } = storageApi.getItem(e.key);
      dispatch(setDeleteBookmark(cityid,placeid));
      storageApi.removeItem(e.key);
    }
    else if(e.key.startsWith(PREFIX_ADDBOOKMARK_IDS)) {
      const {city,place} = storageApi.getItem(e.key);
      dispatch(setAddBookmark(city,place));
      storageApi.removeItem(e.key);
    }
  }
}

