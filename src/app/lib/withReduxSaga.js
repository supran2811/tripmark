import nextReduxWrapper from "next-redux-wrapper";
import nextReduxSaga from "next-redux-saga";
import { fromJS } from "immutable";

import configureStore from "../modules/store";

export function withReduxSaga(BaseComponent) {
  return nextReduxWrapper(configureStore, {
    serializeState: function(state) {
      return state.toJS();
    },
    deserializeState: function(state) {
      return fromJS(state);
    }
  })(nextReduxSaga(BaseComponent));
}