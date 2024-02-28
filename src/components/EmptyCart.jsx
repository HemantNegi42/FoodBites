import {Link} from 'react-router-dom'
import { empty_cart } from '../assets/constants'
const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center my-12 space-y-3">
          <img src={empty_cart} className="h-80" />
          <h1 className="text-4xl font-semibold">Your Cart is Empty!!</h1>
          <p className="text-xl">You can go to home page to add items in cart...</p>
          <Link to='/' className="text-md bg-[#02886F] text-white p-2 px-4 rounded-md">See Restaurants</Link>
    </div>
  )
}

export default EmptyCart
