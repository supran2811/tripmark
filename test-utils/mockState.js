import { Map, Record , List } from "immutable";

export default function getMockState() {
  return Record({
    "auth": Map({
      token: "",
      pathToRedirect: "/mypage",
      firebaseLoaded: false
    }),
    "app": Map({
      errorData: undefined,
      pendingRequestCount: 0
    }),
    "place": Map({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: undefined
    })
  });
}