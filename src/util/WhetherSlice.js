import { createSlice } from "@reduxjs/toolkit";

const WhetherSlice = createSlice({
    name: 'Whether',
    initialState: {
        WhetherState:[],
    },
    reducers:{
        updateWhetherState:(state, action)=>{
            state.WhetherState = action.payload
        }
    }
})


export default WhetherSlice.reducer;
export const {updateWhetherState} = WhetherSlice.actions;