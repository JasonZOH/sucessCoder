import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCourses from "./reducer/reducerCourses";
import reducerCart from "./reducer/reducerCart";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart
})

const store = configureStore({
  reducer : rootReducer
});

export default store;