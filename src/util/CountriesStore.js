import {configureStore} from '@reduxjs/toolkit'
import CountriesSlice from './CountriesSlice';

const appStore = configureStore({
    reducer:{
        Countries:CountriesSlice,
    }
})

export default appStore;