import { combineReducers  } from 'redux-immutable';

import { reducer as authReducer, constants as authConstants } from '../auth/store';
import { reducer as placeReducer , constants as placeConstants } from '../place/store';
import { reducer as appReducer, constants as appConstants } from '../app/store';
import Immutable from 'immutable';

const StateRecord = Immutable.Record({
  [authConstants.NAME]: undefined,
  [appConstants.NAME] :undefined,
  [placeConstants.NAME] :undefined
});

export default combineReducers({
  [authConstants.NAME] : authReducer,
  [appConstants.NAME] : appReducer,
  [placeConstants.NAME] : placeReducer
},StateRecord);
