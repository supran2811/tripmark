import axios from "axios";
import _ from "lodash";
import qs from "qs";

import * as api from "./constants";
import { getUserId } from "../firebase/auth";


export function textSearch({ term, pagetoken }, { latlngObj, radius }) {
  let location, config;
  if (latlngObj) {
    location = `${latlngObj.lat},${latlngObj.lng}`;
  }

  if (term) {
    config = {
      params: {
        query: term,
        location,
        radius,
        key: process.env._GOOGLE_API_KEY
      }
    };
  } else if (pagetoken) {
    config = {
      params: {
        pagetoken,
        key: process.env._GOOGLE_API_KEY
      }
    };
  }

  return axios.get(getUrl(api.API_TEXT_SEARCH), config);
}

export function autoCompleteSearch({ term }, { latlngObj, radius }) {
  if (term === "") {
    return {
      data: {
        predictions: []
      }
    };
  }

  let location;
  if (latlngObj) {
    location = `${latlngObj.lat},${latlngObj.lng}`;
  }
  const config = {
    params: {
      text: term,
      location,
      radius,
      key: process.env._GOOGLE_API_KEY
    }
  };

  return axios.get(getUrl(api.API_AUTOCOMPLETE_SEARCH), config);
}

export function addBookmark(city, place , uid) {
  const userid = uid || getUserId();
  if (userid === "") {
    return null;
  }

  const data = {
    userid, 
    city, 
    place, 
    key: process.env._GOOGLE_API_KEY 
  };

  return axios.post(getUrl(api.API_ADD_BOOKMARK), qs.stringify(data));
  
}

export function deleteBookmark(cityid, placeid , uid) {
  console.log("Inside deleteBookmark ",cityid,placeid);
  const userid = uid || getUserId();
  if (userid === "") {
    return null;
  }
  const config = {
    params: {
      cityid,
      placeid,
      userid
    }
  };
  return axios.delete(getUrl(api.API_DELETE_BOOKMARK), config);
}

export function getAllBookmarks(uid) {
 
  console.log("Inside getAllBookmarks():::::::::::::",uid,getUserId() , (typeof window === "undefined"));
  const userid = uid || getUserId();
  if (userid === "") {
    return null;
  }

  const config = {
    params: {
      userid
    }
  };
  
  return axios.get(getUrl(api.API_GET_ALL_BOOKMARK), config);
    
}

export function getAllBookmarksInCity(cityid,uid) {
  const userid = uid || getUserId();
  if (userid === "") {
    return null;
  }

  const config = {
    params: {
      userid,
      cityid
    }
  };
  return axios.get(getUrl(api.API_GET_BOOKMARK_PLACES), config);
}

export function getCityDetails(cityid,uid) {
  const userid = uid || getUserId();
  const config = {
    params : {
      userid,
      cityid,
      key: process.env._GOOGLE_API_KEY
    }
  };

  // return fetch(withQuery(api.API_GET_CITY_DETAILS , params) , {
  //   mode:"same-origin"
  // }).then( response => response.json());
  
  return axios.get(getUrl(api.API_GET_CITY_DETAILS), config);
}

export function getPlaceDetails(cityid, placeid,uid) {
  const userid = uid || getUserId();
  const config = {
    params: {
      userid,
      cityid,
      placeid,
      key: process.env._GOOGLE_API_KEY
    }
  };

  return axios.get(getUrl(api.API_GET_PLACE_DETAILS), config);
}

export function sendLoginRequest( user ) {
 
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(user),
    url : "/api/login"
  };

  return axios(options);

}

export function sendLogoutRequest() {
  return axios.post("/api/logout" , {});
}

function getUrl(apiUrl) {
  /// CLIENT SIDE
  if(typeof window !== "undefined"){
    return apiUrl;
  }
  /// SERVER SIDE SO WE NEED ABSOLUTE URL
  else {
    return process.env._RESTAPI_BASEURL+apiUrl;
  }
}