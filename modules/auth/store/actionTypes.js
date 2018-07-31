
import { defineAction } from 'redux-define';
import {NAME as AUTH_NAMESPACE} from '../constants';
import { ERROR, PENDING, SUCCESS } from '../../app/constants';

export const ACTION_LOGIN = defineAction('LOGIN' , [ACTION,ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);
export const ACTION_LOGOUT = defineAction('LOGOUT' , [ERROR,PENDING,SUCCESS],AUTH_NAMESPACE);