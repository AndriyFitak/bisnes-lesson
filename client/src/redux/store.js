// store.js
import { combineReducers, createStore } from "redux";
import ProductsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
  products: ProductsReducer,
});

const store = createStore(reducers);

export default store;
