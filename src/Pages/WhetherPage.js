import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useWhetherData from '../hooks/useWhetherData';
import { useDispatch } from 'react-redux';
import { updateWhetherState } from '../util/WhetherSlice';
import { WhetherApiUrl } from '../util/Constants'
import { IconUrl } from '../util/Constants';


const WhetherPage = () => {

  const [cityData, setCityData] = useState({})
  // console.log(cityData);

  const [WhetherData, setWhetherData] = useState({})
  // console.log(WhetherData)

  const data = useSelector((store) => store?.Countries?.countryNames)

  const whetherData = useSelector((store) => store?.Whether?.WhetherState)
  console.log("Whether data from Slice", whetherData)


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
      console.log("Whether Data When Fetched", jsondata)
      dispatch(updateWhetherState(jsondata))

    } catch (error) {
      console.log("Fetch Unsuccessful. ", error)
    }
  }

  useEffect(() => {
    fetchWhetherData()
  }, [])


  return (
    <div className='  w-1/3  mt-32  ml-auto mr-auto text-white		 ' >
      <div className='   flex justify-between	 bg-zinc-900		' >
        <div className='m-10' >
          <h1 className='' >London, UK</h1>
          <p>Sunny</p>
          <div className='pt-12 font-medium text-7xl' >
            <p>34°C</p>
          </div>
        </div>

        <div>
          <img className='mt-3 mb-3 mr-5 h-24 pl-4 '
            src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png'
            alt='Sunny'
          />
          <div className='flex mr-7 ' >
            <div className='pr-7' >
              <p>Feels like</p>
              <p>Wind</p>
              <p>Humidity</p>
              <p>Pressure</p>
            </div>
            <div className='' >
              <p>22°C</p>
              <p>2 m/s</p>
              <p>16%</p>
              <p>15 hPa</p>
            </div>
          </div>
        </div>

        {/* <div>
  <p>34°C</p>
</div> */}

      </div>
    </div>
  )
}

export default WhetherPage