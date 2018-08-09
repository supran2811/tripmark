import { NAME } from "./constants";

export const getErrorData = state => state[NAME].errorData;

export const hasError = state => state[NAME].error;

export const isLoading = state => state[NAME].loading;



