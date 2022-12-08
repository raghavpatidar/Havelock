import { makeAutoObservable } from "mobx";

class dataStore {
  constructor() {
    this.data = undefined;
    makeAutoObservable(this);
  }
  setData = (data) => {
    this.data = data;
  };
  get getData() {
    return this.data;
  }
}

export default dataStore;
