// 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING'

import { useEffect } from "react"
import Card from "./Card"
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState(null);
  async function getData() {
    const res = await fetch( 'https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.0759837%26lng%3D72.8776559%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING');

    const jsonData =await res.json();
    setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  if (!data)
    return <div className="flex flex-wrap w-[90%] justify-center mx-auto">{Array(10).fill("").map(( e,index) => {
      return <Shimmer key={index}/>
     })}</div>
  return (
    <div className="flex flex-wrap w-[90%] justify-center mx-auto ">  
      {data.map((item) => {
         
        return (
         <Link key={item?.info?.id} to={`/resturant/${item.info.id}`}><Card item={item} ></Card></Link> 
        )
      })}
    </div>
  )
}

export default Body
