import { useSelector } from "react-redux"
import EmptyCart from "./EmptyCart"
import { menu } from "../assets/constants";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return (cartItems.length==0) ? <EmptyCart/> :
  (
    <>
     {cartItems.map((item) => {
       return <div className='flex my-2 justify-between p-4 mx-auto w-[80%] bg-white'>
        <img src={ menu+item.imageId} className="w-28 h-28" />
        <div className='flex flex-col space-y-2 px-2 w-[60%]'>
         <h1>{item.name}</h1>
          <p>{item.itemAttribute.vegClassifier}</p>
         
                <p>price:  {item.price} </p>
                <button >Remove</button>
              
        </div>
         </div>
      
      })}
      
    </>
  )
}

export default Cart
