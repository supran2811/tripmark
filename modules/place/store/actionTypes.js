import { defineAction } from "redux-define";
import { ERROR,PENDING,SUCCESS } from "../../app/constants";
import { NAME } from "./constants";

export const FETCH_CITY_DETAILS = defineAction('FETCH_CITY_DETAILS' ,[ERROR,PENDING,SUCCESS] , NAME);

export const SET_CITY_DETAILS = defineAction('SET_CITY_DETAILS',[],NAME);

export const RESET_CITY_DETAILS = defineAction('RESET_CITY_DETAILS',[],NAME);

export const TEXT_SEARCH = defineAction('TEXT_SEARCH' , [ ERROR , PENDING , SUCCESS] , NAME);

