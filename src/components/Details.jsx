import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailCard from "./DetailCard";
import DetailShimmer from "./DetailShimmer";

function Details() {
    const [details, setDetails] = useState(null);
    
    const {id}=useParams()
    useEffect(() => {
        getDetails();
    },[])
    async function getDetails() {
        const data = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D19.0759837%26lng%3D72.8776559%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D'+id);  
        const json = await data.json();
        const wholeData = (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setDetails(wholeData.filter((c) => { return c.card?.card?.itemCards }));
    }
     if (!details)
    return <div className=" w-[80%] mx-auto">{Array(10).fill("").map(( e,index) => {
      return <DetailShimmer key={index}/>
     })}</div>
   
    return (
        <>
            {
               details.map((item,index) => {return (
                    <div key={index} className="w-[80%] mx-auto m-2">
                        <h1 className="text-2xl bg-white p-2 border border-blue-300 rounded-md">
                            {item.card.card.title} ({item.card.card.itemCards.length})</h1>
                        <DetailCard itemCards={item.card.card.itemCards} />
                    </div>
                 
                    )
                })
            }
            
        </>
    )
}
export default Details;