import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";

const rootReducer = combineReducers({
  music: musicReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
