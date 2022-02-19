const API_BASKET_KEY = "basket-data";

function getStorageData(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return data ? data : [];
}

function setStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getStorageData, setStorageData, API_BASKET_KEY };
