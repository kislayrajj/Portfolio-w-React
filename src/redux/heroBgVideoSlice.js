import { createSlice } from "@reduxjs/toolkit";

const heroBgVideoSlice = createSlice({
    name: "heroBgVideo",
    initialState:{
        currentHeroBgVideo:0,

    },

    reducers:{
        setHeroBgVideo:(state, action)=>{
            state.currentHeroBgVideo = action.payload;
        }
    }
})

export const {setHeroBgVideo} = heroBgVideoSlice.actions;
export default heroBgVideoSlice.reducer;