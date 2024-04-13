import {configureStore} from '@reduxjs/toolkit'
import CountriesSlice from './CountriesSlice';
import WhetherSlice from './WhetherSlice';

const appStore = configureStore({
    reducer:{
        Countries:CountriesSlice,
        Whether:WhetherSlice,
    }
})

export default appStore;