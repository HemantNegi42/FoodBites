import { Link } from 'react-router-dom';
import { logo } from '../assets/constants';
import { useSelector } from 'react-redux';

function Header() {

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <>
            <div className="h-12 bg-[#02886F]  text-xl text-white px-10 p-2 flex justify-between">
                <img src={logo} />
                <div className="">
                    <Link to="/" className="p-8">Home</Link>
                    <Link to="/about" className="p-8">About</Link>
                    <Link to="/contact" className="p-8">Contact</Link>
                    <Link to="/cart" className="p-8">Cart  <span className='bg-[#9BECE1] text-black  rounded-full py-1 px-3 absolute -top-1 '>{ cartItems.length}</span></Link>
                </div>
            </div>
        </>
    );
}
export default Header;