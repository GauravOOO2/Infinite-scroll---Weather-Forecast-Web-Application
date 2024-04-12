// import { create } from '@mui/material/styles/createTransitions'
import {createSlice} from '@reduxjs/toolkit'

const countrySlice = createSlice({
    name:'Countries',
    initialState:{
        countryNames:[],
    },
    reducers:{
        updateCountryNames:(state, action)=>{
            state.countryNames = action.payload
        }
    }
})


export default countrySlice.reducer;
export const {updateCountryNames} = countrySlice.actions;