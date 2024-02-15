import { Link } from 'react-router-dom';
import { logo } from '../assets/constants';

function Header() {
    return (
        <>
            <div className="h-12 bg-[#02886F] text-white px-10 p-2 flex justify-between">
                <img src={logo} />
                <div className="">
                    <Link to="/" className="p-4">Home</Link>
                    <Link to="/about" className="p-4">About</Link>
                    <Link to="/contact" className="p-4">Contact</Link>
                    <Link to="/cart" className="p-4">Cart</Link>
                </div>
            </div>
        </>
    );
}
export default Header;