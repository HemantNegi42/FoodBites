import { logo } from '../assets/constants';

function Header() {
    return (
        <>
            <div className="h-12 bg-[#02886F] text-white px-10 p-2 flex justify-between">
                <img src={logo} />
                <div className="">
                    <a className="p-4" href="">Home</a>
                    <a className="p-4" href="">About</a>
                    <a className="p-4" href="">Contact</a>
                    <a className="p-4" href="">Cart</a>
                </div>
            </div>
        </>
    );
}
export default Header;