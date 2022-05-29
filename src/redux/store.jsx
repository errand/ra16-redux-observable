import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";

export default configureStore({
  reducer:{
    skills: skillsReducer
  }
});
