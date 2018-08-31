
export function getNameInitials(name) {
  const nameArray = name.split(' ');
  return nameArray.length > 1 ? `${nameArray[0].charAt(0)} ${nameArray[1].charAt(0)}`:`${nameArray[0].charAt(0)}`;
}

export function getQueryParam(key , search) {
    console.log("getQueryParam",key,search);
    if(search) {
      search = search.substr(1);
      const params = search.split('&');
      for(const param of params) {
        const keyValues = param.split('=');
        if(keyValues[0] === key) {
          return keyValues[1]
        }
      }
    }
    return undefined;
}