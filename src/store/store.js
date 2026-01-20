import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import uiReducer from "./uiSlice";
import moduleReducer from "./module";
import kanbanReducer from "./kanbanSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer,
    module: moduleReducer,
    kanban: kanbanReducer,
  },
});
