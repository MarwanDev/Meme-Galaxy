import { configureStore } from "@reduxjs/toolkit";
import memesReducer from "./memesSlice/memesSlice";

const store = configureStore({
  reducer: {
    meme: memesReducer,
  },
});

export default store;
