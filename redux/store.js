import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCourses from "./reducer/reducerCourses";

const rootReducer = combineReducers({
  courses: reducerCourses
})

const store = configureStore({
  reducer : rootReducer
});

export default store;