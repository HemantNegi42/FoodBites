
function Card({item}) {
    return (
        <>
            <div className="p-2 mx-2 my-3 border shadow-lg border-blue-300 w-52 bg-white text-gray-700">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ item?.info?.cloudinaryImageId} className="h-44 w-full"/>
                <div>
                    <h1 className="text-xl font-semibold">{item?.info?.name}</h1>
                    <p>{item?.info?.locality}</p>
                    <p>{item?.info?.costForTwo}</p>
                    <p>{item?.info?.avgRating} Stars</p>
                </div>
            </div>
        </>
   
  )
}

export default Card
