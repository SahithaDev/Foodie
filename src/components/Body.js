import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestaurants(
      json?.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants || []
    ); //it is mandatory to put json ,  before starting the api call (as the cards are present in json)
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const toprated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(toprated);
            console.log("FILTERED toprated:", toprated); // Only >4
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-card">
        {listOfRestaurants.map(
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
