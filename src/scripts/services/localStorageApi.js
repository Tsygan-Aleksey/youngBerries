const LOCAL_STORAGE_API = {
  key: {
    basket: "basket-data",
  },
  getStorageData() {
    let data = JSON.parse(localStorage.getItem(this.key.basket));
    return data ? data : [];
  },
  setStorageData(data) {
    localStorage.setItem(this.key.basket, JSON.stringify(data));
  },
};
export { LOCAL_STORAGE_API };
