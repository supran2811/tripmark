import { combineReducers } from 'redux';

import { reducer as authReducer, constants as authConstants } from '../auth/store';

export default combineReducers({
  [authConstants.NAME] : authReducer
});
