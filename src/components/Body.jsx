import { useEffect } from "react"
import Card from "./Card"
import { useState } from "react";
function Body() {
  useEffect(() => {
    getData();

  }, []);

  const [data, setData] = useState(null);
  async function getData() {
    const res = await fetch( 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING');
   
    const jsonData =await res.json();
    setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
    //console.log(data);
  return (
    <div className="flex flex-wrap w-[90%] justify-center mx-auto ">
      {data&&data.map((item) => {
        return (
          <Card item={item} key={item?.info?.id}></Card>
        )
      })}
    </div>
  )
}

export default Body
