import { createSlice } from "@reduxjs/toolkit";


const searchCacheSlice = createSlice({
    
    name:"seachCache",
    initialState:{
        
    },
    reducers:{
        updateSearchCache:(state,action)=>{
            Object.assign(state, action.payload);
        }
    }

})


export const {updateSearchCache} = searchCacheSlice.actions

export default searchCacheSlice.reducer

