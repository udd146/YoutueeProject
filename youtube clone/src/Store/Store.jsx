import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './toggleSideBarSlice'; // adjust the path as needed
import seachCacheReducer from './searchCacheSlice'
import ChatReducer from './ChatSlice' 
const store = configureStore({
  reducer: {
    sideBarToggle: sidebarReducer,
    seachCache: seachCacheReducer,
    Chat: ChatReducer
  },
  });

export default store;