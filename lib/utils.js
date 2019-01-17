import { Map } from "immutable";

export function getNameInitials(name) {
  const nameArray = name.split(" ");
  return nameArray.length > 1 ? `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}` : `${nameArray[0].charAt(0)}`;
}

export function getQueryParam(key, search) {
  if (search) {
    search = search.substr(1);
    const params = search.split("&");
    for (const param of params) {
      const keyValues = param.split("=");
      if (keyValues[0] === key) {
        return keyValues[1];
      }
    }
  }
  return undefined;
}

export function getValue(key, obj) {
  return Map.isMap(obj) ? obj.get(key) : obj[key];
}

export function setValue(key, value, obj) {
  if (Map.isMap(obj)) {
    return obj.set(key, value);
  }
  else {
    return {
      ...obj,
      [key]: value
    };
  }
}

export function deleteKey(key,obj) {
  if(key && obj) {
    if (Map.isMap(obj)) {
      return obj.delete(key);
    }
    else {
      return {
        ...obj,
        [key]: undefined
      };
    }
  }
  return undefined;
}