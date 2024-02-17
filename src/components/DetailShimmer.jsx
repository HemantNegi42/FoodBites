import React from 'react'

const DetailShimmer = () => {
  return (
     <div className='flex justify-between bg-white p-3 m-2'>
              <div className='w-[80%]'>
              <h1 className='h-10 w-full bg-gray-400 mt-2'></h1>
                <p className='h-4 w-full bg-gray-400 mt-2'> </p>
                <p className='h-4 w-full bg-gray-400 mt-2'></p>
              </div>
                <div  className='w-28 h-28 bg-gray-300' ></div>
    </div>
  )
}

export default DetailShimmer
