import { getNameInitials, getQueryParam, getValue, setValue, deleteKey } from "./utils";
import { Map } from "immutable";

describe("Test utility functions", () => {
  it("getNameInitial returns correct value" , () => {
    expect(getNameInitials("Deepak Nair")).toEqual("DN");
    expect(getNameInitials("Deepak")).toEqual("D");
  });

  it("getQueryParameters return correct value for key" , () => {
    expect(getQueryParam("key1","?key1=value1")).toEqual("value1");
    expect(getQueryParam("key2","?key1=value1")).toBeUndefined();
    expect(getQueryParam("key2","?key1=value1&key2=value2&key3=value3")).toEqual("value2");
  });

  it("getValue return correct value from immutable map" , () => {
    let myMap = new Map({"key":"value1"});
    expect(getValue("key",myMap)).toEqual("value1");
    expect(getValue("key",{"key":"value1"})).toEqual("value1");
  });

  it("setValue sets the value to immutable map" , () => {
    let map = setValue("key","value");
    expect(map["key"]).toEqual("value");

    map = setValue("key1","value1",map);
    expect(map["key1"]).toEqual("value1");
    expect(map["key"]).toEqual("value");

    let immMap = new Map({"key":"value"});
    immMap = setValue("key1","value1",immMap);
    expect(immMap.get("key")).toEqual("value");
    expect(immMap.get("key1")).toEqual("value1");
  });

  it("delete key deletes the value from map and immutable map",() => {
    let map = setValue("key","value");
    map = deleteKey("key",map);
    expect(map["key"]).toBeUndefined();

    let immMap = new Map({"key":"value"});
    immMap = deleteKey("key",immMap);
    expect(immMap.get("key")).toBeUndefined();

    expect(deleteKey()).toBeUndefined();
    expect(deleteKey("key")).toBeUndefined();
  });
});