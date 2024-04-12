import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {CityApiUrl} from '../util/Constants'
import {updateCountryNames} from '../util/CountriesSlice'

const useCitiesData = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const data = await fetch(CityApiUrl);
            const jsondata = await data.json()
            // console.log(jsondata.results)

            dispatch(updateCountryNames(jsondata?.results))

        } catch (error) {
            console.log("Fetch Unsuccessful due to: ", error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


}

export default useCitiesData