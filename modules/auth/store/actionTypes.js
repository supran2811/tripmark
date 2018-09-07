
import { defineAction } from 'redux-define';
import {NAME as AUTH_NAMESPACE} from './constants';
import { ERROR, PENDING, SUCCESS } from '../../app/constants';

export const ACTION_LOGIN = defineAction('LOGIN' , [ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);
export const ACTION_LOGOUT = defineAction('LOGOUT' , [ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);
export const ACTION_SET_TOKEN = defineAction('SET_TOKEN' , [ERROR,PENDING,SUCCESS] , AUTH_NAMESPACE);


export const ACTION_SIGNUP = defineAction('SIGNUP' , [ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);
export const ACTION_GOOGLE_SIGNUP = defineAction('GOOGLE_SIGNUP' , [ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);

export const ACTION_SET_PATH_TO_REDIRECT = defineAction('ACTION_SET_PATH_TO_REDIRECT' ,[] ,AUTH_NAMESPACE);

export const ACTION_RESET_PATH_TO_REDIRECT = defineAction('ACTION_RESET_PATH_TO_REDIRECT' ,[] ,AUTH_NAMESPACE);
