import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useWhetherData from '../hooks/useWhetherData';
import { useDispatch } from 'react-redux';
import { updateWhetherState } from '../util/WhetherSlice';
import { WhetherApiUrl } from '../util/Constants'


const WhetherPage = () => {

  const [cityData, setCityData] = useState({})
  // console.log(cityData);

  const [WhetherData, setWhetherData] = useState({})
  // console.log(WhetherData)

  const data = useSelector((store) => store.Countries.countryNames)

  const whetherData = useSelector((store) => store.Whether.WhetherState)
  console.log("Selector Debug", whetherData)


  const { geoname_id } = useParams();
  const dispatch = useDispatch()


  useEffect(() => {
    data.map((i) => {
      if (i.geoname_id == geoname_id) {
        setCityData(i)

      }
    }
    )
  }, [data, geoname_id])


  const fetchWhetherData = async () => {
    try {
      const data = await fetch(WhetherApiUrl + '&lat=' + cityData?.coordinates?.lat + '&lon=' + cityData?.coordinates?.lon);
      const jsondata = await data.json()
      // console.log("Debug",jsondata)
      dispatch(updateWhetherState(jsondata))

    } catch (error) {
      console.log("Fetch Unsuccessful. " + error)
    }
  }

  useEffect(() => {
    fetchWhetherData()
  }, [])


  return (
    <div>
      <h1>{cityData.name} weather data</h1>
      <h2> {cityData.name} </h2>

      <div>
        <img className='h-2'
         src='https://th.bing.com/th/id/R.da459319a451f205108abeb608a615f8?rik=WEjk0C2cqyQy3Q&riu=http%3a%2f%2fimages.clipartpanda.com%2fweather-clipart-humid-weather-clip-art-2.jpg&ehk=JoDxRpGFGJjTWBRwRIkmzh2O6jXHatIK%2fJw9DzTVE1A%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
        />
        <h1>{whetherData?.main?.humidity}</h1>
      </div>

<div>
  <img src='https://www.mayonews.ie/resizer/800/-1/true/2024_04_10/Screenshot_%28706%29-1712739320095.png--the_start_of_summer__met_eireann_weather_u_turn_as_they_pinpoint_sun_blast.png?1712739320279' />
  <h1>{whetherData?.main?.pressure}</h1>

</div>

<div>
<img  
src='https://th.bing.com/th/id/OIP.IoP_jBvFiAPp8PJQtWN7IwHaEK?rs=1&pid=ImgDetMain'
/>

<h1>{whetherData?.main?.temp}</h1>

</div>

      {/* <useWhetherData 
      latitude = {cityData.coordinates.lat}
      longitude = {cityData.coordinates.lat}
      /> */}
      {/* <h2> {cityData?.coordinates?.lat} </h2> */}
      {/* <h2> {cityData?.coordinates?.lon} </h2> */}

    </div>
  )
}

export default WhetherPage