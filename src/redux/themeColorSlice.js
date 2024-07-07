import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeColor : "dark",
};

const themeColorSlice = createSlice({
    name : "theme",
    initialState,
    reducers:{

    // Reducer function to update themeColor

    setThemeColor(state,action){
        state.themeColor= action.payload
    }
    }
})

export const {setThemeColor}= themeColorSlice.actions

export default themeColorSlice.reducer