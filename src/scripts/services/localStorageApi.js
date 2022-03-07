const LOCAL_STORAGE_API = {
  key: "basket-data",
  getStorageData() {
    let data = JSON.parse(localStorage.getItem(this.key));
    return data ? data : [];
  },
  setStorageData(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
};
export { LOCAL_STORAGE_API };
