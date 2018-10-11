
export function  addItem(key,item) {
  console.log("AddItem",localStorage);
  if(localStorage) {
    localStorage.setItem(key,JSON.stringify(item));
  }
}

export function removeItem(key) {
  if(localStorage) {
    localStorage.removeItem(key);
  }
}

export function getItem(key) {
  if(localStorage) {
    const item = localStorage.getItem(key);
    console.log("LocalStore , getItem ",key,item);
    return item ? JSON.parse(item) : item;
  }
  return null;
}

