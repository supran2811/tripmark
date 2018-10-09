import { defineAction } from "redux-define";
import { ERROR, PENDING, SUCCESS, CANCEL } from "../../app/constants";
import { NAME } from "./constants";

export const FETCH_CITY_DETAILS = defineAction(
  "FETCH_CITY_DETAILS",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const FETCH_PLACE_DETAILS = defineAction(
  "FETCH_PLACE_DETAILS",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const SET_CITY_DETAILS = defineAction("SET_CITY_DETAILS", [], NAME);
export const RESET_CITY_DETAILS = defineAction("RESET_CITY_DETAILS", [], NAME);
export const TEXT_SEARCH = defineAction(
  "TEXT_SEARCH",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const AUTOCOMPLETE_SEARCH = defineAction(
  "AUTOCOMPLETE_SEARCH",
  [ERROR, PENDING, SUCCESS, CANCEL],
  NAME
);
export const CLEAR_SUGGESTIONS = defineAction("CLEAR_SUGGESTIONS", [], NAME);
export const CANCEL_AUTOCOMPLETE_SEARCH = defineAction(
  "CANCEL_AUTOCOMPLETE_SEARCH",
  [],
  NAME
);

export const ADD_BOOKMARK = defineAction(
  "ADD_BOOKMARK",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const DELETE_BOOKMARK = defineAction(
  "DELETE_BOOKMARK",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const GET_BOOKMARK_PLACES = defineAction(
  "GET_BOOKMARK_PLACES",
  [ERROR, PENDING, SUCCESS],
  NAME
);
export const GET_BOOKMARKS = defineAction(
  "GET_BOOKMARKS",
  [ERROR, PENDING, SUCCESS],
  NAME
);
