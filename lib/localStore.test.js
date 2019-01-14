import { addItem ,_APP_LOCAL_DATA } from "./localStore";

describe("Testing local store" , () => {
  it("should add item to local storage" , () => {
    addItem("test-key","test-value");
    const data = localStorage.getItem(_APP_LOCAL_DATA);
    const obj  = JSON.parse(data);
    expect(obj["test-key"]).toEqual("test-value");
  });
});