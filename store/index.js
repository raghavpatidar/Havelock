import { enableStaticRendering } from "mobx-react-lite";
import DataStore from "./DataStore";

enableStaticRendering(typeof window === "undefined");

let clientStore;

const initStore = (initData) => {
  const store = clientStore ?? new DataStore();
  if (initData?.DataStore) store.hydrate(initData.DataStore);

  if (typeof window === "undefined") return store;
  if (!clientStore) clientStore = store;
  console.log(store);
  return store;
};

export function useStore(initData) {
  return initStore(initData);
}
