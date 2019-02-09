import { localStorageListner as placeListener } from "../place/store";

export function handleAllStorageListener(e,dispatch) {
  placeListener.handleStorageListener(e,dispatch);
}