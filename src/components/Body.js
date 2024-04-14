import React from 'react'
import AutoCompleteFieldComponent from './AutoCompleteFieldComponent'
import TableComponent from './TableComponent'
import useCitiesData from '../hooks/useCitiesData'
import useWhetherData from '../hooks/useWhetherData'


const Body = () => {
  useCitiesData()
  useWhetherData()

  return (
    <div className='' >
        <div className="m-16  border-4 border-black ">
      
      <div className='flex justify-center p-3 bg-white ' >
      <AutoCompleteFieldComponent  />
      </div>

     
      <div className='' >
      <TableComponent />
      
      </div>
     
    </div>
    </div>
  )
}

export default Body