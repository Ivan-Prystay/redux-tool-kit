import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { taskReducer, filtersReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
  },
});

/*++++++*/
