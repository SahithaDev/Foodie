import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
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
    );
    setFilteredRestaurants(
      /**this is created to use the search functionality , like if i want to search something again 
      it searches from the already filtered list , which cannot be possible to search someting**/
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
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const toprated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(toprated);
            console.log("FILTERED toprated:", toprated); // Only >4
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-card">
        {filteredRestaurants.map(
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
