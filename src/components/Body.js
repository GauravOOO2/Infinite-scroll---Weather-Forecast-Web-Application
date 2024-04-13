import React from 'react'
import AutoCompleteFieldComponent from './AutoCompleteFieldComponent'
import TableComponent from './TableComponent'
import useCitiesData from '../hooks/useCitiesData'
import useWhetherData from '../hooks/useWhetherData'


const Body = () => {
  useCitiesData()
  useWhetherData()

  return (
    <div>
        <div className="m-16  border-4 border-black ">
      
      <div className='flex justify-center p-5 ' >
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