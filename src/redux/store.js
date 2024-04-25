import { configureStore } from "@reduxjs/toolkit";
import equipment from "./slices/equipment";
import type from "./slices/type";

const store = configureStore({
  reducer: {
    equipment,
    type
  },
});

export default store;
