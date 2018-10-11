import axios from "axios";
import _ from "lodash";
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

export function addBookmark(city, place, cityid) {
  const userid = getUserId();
  if (userid === "") {
    return null;
  }

  const data = {
    userid, 
    city, 
    place, 
    cityid,  
    key: process.env._GOOGLE_API_KEY 
  };

  return axios.post(`${api.API_ADD_BOOKMARK}`, data);
}

export function deleteBookmark(cityid, placeid) {
  const userid = getUserId();
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

export function getAllBookmarks() {
  const userid = getUserId();
  if (userid === "") {
    return null;
  }

  const config = {
    params: {
      userid
    }
  };

  return axios.get(`${api.API_GET_ALL_BOOKMARK}`, config);
}

export function getAllBookmarksInCity(cityid) {
  const userid = getUserId();
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

export function getCityDetails(cityid) {
  const userid = getUserId();
  const config = {
    params: {
      userid,
      cityid,
      key: process.env._GOOGLE_API_KEY
    }
  };

  return axios.get(`${api.API_GET_CITY_DETAILS}`, config);
}

export function getPlaceDetails(cityid, placeid) {
  const userid = getUserId();
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
