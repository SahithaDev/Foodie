import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
import resObj from "../utils/mockData";
const Body = () => {
  const [resData, setResData] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const toprated = resObj.filter((res) => res.info.avgRating > 4);
            setResData(toprated);
            console.log("FILTERED toprated:", toprated); // Only >4
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-card">
        {resData.map(
          (
            restaurant //On each loop, restaurant is one element of resObj.
          ) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
