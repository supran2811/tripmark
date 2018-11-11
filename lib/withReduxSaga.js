import nextReduxWrapper from "next-redux-wrapper";
import nextReduxSaga from "next-redux-saga";

import configureStore from "../modules/store";
import { fromJS } from "immutable";

export function withReduxSaga(BaseComponent) {
  return nextReduxWrapper(configureStore, {
    serializeState: function(state) {
      return state.toJS();
    },
    deserializeState: function(state) {
      return fromJS(state);
    },
    debug:true
  })(nextReduxSaga(BaseComponent));
}