import { createSlice } from '@reduxjs/toolkit';

const toggleSidebarSlice = createSlice({
    name: "sideBarToggle",
    initialState: {
      value: true
    },
    reducers: {
      toggleSidebar: (state) => {
        state.value = !state.value;
      },
      closeSideBar: (state)=>{
        state.value = false
       }
    }
  });

export const { toggleSidebar ,closeSideBar} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;