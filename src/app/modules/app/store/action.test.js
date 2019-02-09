
import { resetError } from "./action";
import { RESET_ERROR } from "./actionTypes";

describe("app actions" , () => {
  it("should create an action to reset error flags" , () => {
    expect(resetError()).toEqual({
      type: RESET_ERROR.ACTION
    });
  });
});