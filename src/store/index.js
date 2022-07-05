
import {legacy_createStore as createStore, combineReducers } from "redux";

import listReducer from "./modules/ProductsList/reducer";
import kartReducer from './modules/Kart/reducers'

const reducers = combineReducers({ productList: listReducer,kart:kartReducer});

const store = createStore(reducers);

export default store
          