import axios from "axios";
import _ from "lodash";
import fetch from "isomorphic-unfetch";
import withQuery from "with-query";

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

  return axios.get(`${api.API_TEXT_SEARCH}`, config);
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

  return axios.get(`${api.API_AUTOCOMPLETE_SEARCH}`, config);
}

export function addBookmark(city, place, cityid , uid) {
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

  return axios.post(`${api.API_ADD_BOOKMARK}`, data);
}

export function deleteBookmark(cityid, placeid , uid) {
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
  return axios.delete(`${api.API_DELETE_BOOKMARK}`, config);
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
  
  console.log("WINDOW TYPE ::: ",(typeof window === "undefined"));

  if (typeof window !== "undefined") {
    console.log("WINDOW TYPE IS DEFINED SO CLIENT SIDE");
    return axios.get(`${api.API_GET_ALL_BOOKMARK}`, config);
  }  
  else {
    console.log("WINDOW TYPE IS UNDEFINED SO SERVER SIDE",(process.env._RESTAPI_BASEURL + api.API_GET_ALL_BOOKMARK));
    return axios.get( process.env._RESTAPI_BASEURL + api.API_GET_ALL_BOOKMARK , config);
  }
    
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
  return axios.get(`${api.API_GET_BOOKMARK_PLACES}`, config);
}

export function getCityDetails(cityid,uid) {
  const userid = uid || getUserId();
  // const config = {
    const params = {
      userid,
      cityid,
      key: process.env._GOOGLE_API_KEY
    }
  // };

  return fetch(withQuery(api.API_GET_CITY_DETAILS , params) , {
    mode:"same-origin"
  }).then( response => response.json());//axios.get(`${api.API_GET_CITY_DETAILS}`, config);
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

  return axios.get(`${api.API_GET_PLACE_DETAILS}`, config);
}

export function sendLoginRequest( token , uid ) {
 
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({ token , uid }),
    url : "/api/login"
  };

  return axios(options);

}

export function sendLogoutRequest() {
  return axios.post("/api/logout" , {});
}