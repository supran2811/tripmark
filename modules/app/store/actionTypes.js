import { defineAction } from 'redux-define';

import {NAME as APP_NAMESPACE} from './constants';

export const START_LOADING = defineAction('START_LOADING',[],APP_NAMESPACE);
export const STOP_LOADING = defineAction('STOP_LOADING',[],APP_NAMESPACE);

export const RESET_ERROR = defineAction('RESET_ERROR',[],APP_NAMESPACE);