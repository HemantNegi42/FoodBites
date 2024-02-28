import {menu} from '../assets/constants';
function Card({item}) {
    return (
        <div className="relative hover:scale-105 cursor-pointer">
            {item?.info?.aggregatedDiscountInfoV3?.header && <div className="flex flex-col bg-[#02886F] text-white absolute py-1 top-2 px-2 rounded-xl z-10 text-sm">
                    <span>{item?.info?.aggregatedDiscountInfoV3?.header}</span>
                    <span>{item?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
                </div>}
            <div className="p-2 mx-2 my-3 border shadow-lg border-blue-300 w-56 bg-white text-gray-700 ">
              
                <img src={menu + item?.info?.cloudinaryImageId} className="h-44 w-full" />
                <div>
                    <h1 className="text-xl font-semibold">{item?.info?.name}</h1>
                    <p>{item?.info?.locality}</p>
                    <p>{item?.info?.costForTwo}</p>
                    <p>{item?.info?.avgRating} Stars</p>
                </div>
            </div>
        </div>
  )
}

export default Card
