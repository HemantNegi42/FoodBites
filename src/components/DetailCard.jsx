import React from 'react'
import {menu} from '../assets/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../assets/cartSlice';
const DetailCard = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
   dispatch(addItem(item?.card?.info));
 }
  return (
    <>
      {
        itemCards.map((item) => {
          return (
            <div key={item.card.info.id} className='flex justify-between bg-white shadow-md rounded-md p-3 m-2'>
              <div >
            <h1 className='font-semibold text-lg'>{item?.card?.info?.name}</h1>
                <p className='text-gray-600 text-md'>₹ {item?.card?.info?.price}</p>
                <p className='text-sm text-gray-500'>{item?.card?.info?.description}</p>
              </div>
              <div className='flex flex-col items-center ml-2 '>
                <div  className='w-28 h-28 hover:scale-105' ><img src={menu + item.card.info.imageId} alt={item?.card?.info?.name}/></div>
                <button onClick={()=>handleAdd(item) } className='bg-[#02886F] text-white px-2 mt-2 rounded-lg'>Add+</button></div>
          </div>)
        })
      }
    </>
  )
}

export default DetailCard
