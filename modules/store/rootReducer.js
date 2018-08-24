import { combineReducers } from 'redux';

import { reducer as authReducer, constants as authConstants } from '../auth/store';
import { reducer as placeReducer , constants as placeConstants } from '../place/store';
import { reducer as appReducer, constants as appConstants } from '../app/store';


export default combineReducers({
  [authConstants.NAME] : authReducer,
  [appConstants.NAME] : appReducer,
  [placeConstants.NAME] : placeReducer
});
