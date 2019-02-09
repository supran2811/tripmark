import { Record , Map} from "immutable";
import { isAuthenticated } from "./selector";

describe("auth selector" , () => {
  const myRecord = Record({
    token: "",
    uid: "",
    pathToRedirect: "/mypage",
    firebaseLoaded: false
  });
  const initialState = Map({
    "auth" : new myRecord({
      token: "",
      pathToRedirect: "/mypage",
      firebaseLoaded: false
    })  
  });

  it("authenticates should return false by default" , () => {
    expect(isAuthenticated(initialState)).toBeFalsy();
  });

  it("authenticaton status should return true once user is authenticated" , () => {
    const state = Map({
      "auth" : new myRecord({
        token: "123444555",
        pathToRedirect: "/mypage",
        firebaseLoaded: true
      })  
    });
    expect(isAuthenticated(state)).toBeTruthy();
  });
});