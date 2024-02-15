import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Details() {
    const [details, setDetails] = useState(null);
    const {id}=useParams()
    useEffect(() => {
        getDetails();
    },[])
    async function getDetails() {
        const data = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D19.0759837%26lng%3D72.8776559%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D208111');  
        const json = await data.json();
        setDetails((json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards));
    }
  
    
    return (
        <>
            {
                details && details.map((item) => {
                 console.log(item)
                    return <h1>{item.card.info.name}</h1>
                })
            }
            
        </>
    )
}
export default Details;