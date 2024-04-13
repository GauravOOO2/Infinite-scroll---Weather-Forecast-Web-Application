import React from 'react'
import { useParams } from 'react-router-dom'


const WhetherPage = () => {

    const {geoname_id} = useParams();
    const {cou_name_en} = useParams();
    console.log(cou_name_en)
    console.log(geoname_id)

  return (
    <div>WhetherPage</div>
  )
}

export default WhetherPage