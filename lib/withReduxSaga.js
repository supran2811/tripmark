import nextReduxWrapper from "next-redux-wrapper";
import nextReduxSaga from "next-redux-saga";

import configureStore from "../modules/store";

export function withReduxSaga(BaseComponent) {
  return nextReduxWrapper(configureStore, {
    serializeState: state => console.log("searialsed state"),
    deserializeState: state => console.log("deserializeState state")
  })(nextReduxSaga(BaseComponent));
}