import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailCard from "./DetailCard";
import DetailShimmer from "./DetailShimmer";
import { fetch_details } from "../assets/constants";
function Details() {
    const [details, setDetails] = useState(null);
    
    const {id}=useParams()
    useEffect(() => {
        getDetails();
    },[])
    async function getDetails() {
        const data = await fetch(fetch_details +id);  
        const json = await data.json();
        console.log(json);
        const wholeData = (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setDetails(wholeData.filter((c) => { return c.card?.card?.itemCards }));
    }
     if (!details)
    return <div className="w-[80%] mx-auto">{Array(10).fill("").map(( e,index) => {
      return <DetailShimmer key={index}/>
     })}</div>
    return (
        <>    
            {
                details.map((item, index) => {
                    return (
                    <div key={index} className="w-[80%] mx-auto m-2 cursor-default">
                       <details open>
                           <summary className="text-2xl bg-gray-50 shadow-lg p-2 border border-blue-300 rounded-md ">
                                    {item.card.card.title} ({item.card.card.itemCards.length})
                                </summary>
                           <DetailCard itemCards={item.card.card.itemCards} />
                        </details>               
                    </div>
                 
                    )
                })
            }
            
        </>
    )
}
export default Details;