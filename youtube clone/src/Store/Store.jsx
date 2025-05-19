import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './toggleSideBarSlice'; // adjust the path as needed
import seachCacheReducer from './searchCacheSlice'
const store = configureStore({
  reducer: {
    sideBarToggle: sidebarReducer,
    seachCache: seachCacheReducer
  },
  });

export default store;