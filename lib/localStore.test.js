import { addItem ,_APP_LOCAL_DATA, clearData } from "./localStore";

describe("Testing local store" , () => {
  it("should add item to local storage" , () => {
    addItem("test-key","test-value");
    const data = localStorage.getItem(_APP_LOCAL_DATA);
    const obj  = JSON.parse(data);
    expect(obj["test-key"]).toEqual("test-value");
  });

  it("should clear local storage data" , () => {
    addItem("test-key","test-value");
    clearData();
    expect(localStorage.getItem(_APP_LOCAL_DATA)).toBeNull();
  });
});