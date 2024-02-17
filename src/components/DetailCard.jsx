import React from 'react'
import {menu} from '../assets/constants'
const DetailCard = ({itemCards}) => {
  return (
    <>
      
      {
        itemCards.map((item) => {
          console.log(item)
          return (
            <div key={item.card.info.id} className='flex justify-between bg-white p-3 m-2'>
              <div >
            <h1 className='font-semibold text-lg'>{item?.card?.info?.name}</h1>
                <p className='text-gray-600 text-md'>₹ {item?.card?.info?.price}</p>
                <p className='text-sm text-gray-500'>{item?.card?.info?.description}</p>
              </div>
              <div className='flex flex-col items-center ml-2 '>
                <div  className='w-28 h-28 hover:scale-105' ><img src={menu + item.card.info.imageId} /></div>
              <button className='bg-green-600 text-white px-2 mt-2 rounded-lg'>Add+</button></div>
          </div>)
        })
      }
    </>
  )
}

export default DetailCard
