import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    setlistOfRestaurants(
      json?.data.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants || [],
    );
    setFilteredRestaurants(
      /**this is created to use the search functionality , like if i want to search something again 
      it searches from the already filtered list , which cannot be possible to search someting**/
      json?.data.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants || [],
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
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
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
              (res) => res.info.avgRating > 4,
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
            restaurant, //On each loop, restaurant is one element of resObj.
          ) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ),
        )}
      </div>
    </div>
  );
};
export default Body;
