import { createSlice } from "@reduxjs/toolkit";



const ChatSlice = createSlice({
    name:"Chat",
    initialState:{
        message:[]
    },
    reducers:{
        updateLiveChat : (state,action)=>{
            state.message.push(action.payload)
            const LIMIT = 100;
            const REMOVE_COUNT = 10;
            if (state.message.length > LIMIT) {
                state.message.splice(0, REMOVE_COUNT); 
            }
        }
        
    }
})


export const  {updateLiveChat} = ChatSlice.actions

export default ChatSlice.reducer