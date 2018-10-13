
export const _APP_LOCAL_DATA = "tripmark-data";
const _APP_LOCAL_LASTUPDATE_TIME = "tripmark-data-lastupdate-time";

export function  addItem(key,item) {
  if(localStorage) {

    const data = localStorage.getItem(_APP_LOCAL_DATA);
    const obj = data ? JSON.parse(data) : {};
    obj[key] = item;

    localStorage.setItem(_APP_LOCAL_DATA,JSON.stringify(obj));
    localStorage.setItem(_APP_LOCAL_LASTUPDATE_TIME,Date.now());
    _setTimeOutToClearKeyCache();
  }
}

export function clearData() {
  localStorage.removeItem(_APP_LOCAL_DATA);
  localStorage.removeItem(_APP_LOCAL_LASTUPDATE_TIME);
}

export function checkAndClearAppData() {
  const lastUpdateTime =  localStorage.getItem(_APP_LOCAL_LASTUPDATE_TIME);
  if(lastUpdateTime) {
    const diffUpdateTime = Date.now() - lastUpdateTime;

    if(diffUpdateTime > 1000) {
      clearData();
    }
  }
}

function _setTimeOutToClearKeyCache() {
  setTimeout(function() {
    checkAndClearAppData();
  } , 2000);
}




