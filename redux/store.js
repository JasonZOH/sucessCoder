import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCourses from "./reducer/reducerCourses";
import reducerCart from "./reducer/reducerCart";
import reducerPayment from "./reducer/reducerPayment";

const rootReducer = combineReducers({
  courses: reducerCourses,
  cart: reducerCart,
  payments: reducerPayment
})

const store = configureStore({
  reducer : rootReducer
});

export default store;