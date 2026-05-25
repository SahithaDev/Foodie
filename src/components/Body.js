import RestaurantCard from "./RestaurantCard";
// import { SWIGGY_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import mockData from "../utils/mockData.json";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(mockData); //replaced [] --> mockdata
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockData); //replaced [] --> mockdata
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const PAGE_SIZE = useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(SWIGGY_URL);
  //   const json = await data.json();

  //   setlistOfRestaurants(
  //     json?.data.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
  //       .restaurants || [],
  //   );
  //   setFilteredRestaurants(
  //     /**this is created to use the search functionality , like if i want to search something again
  //     it searches from the already filtered list , which cannot be possible to search someting**/
  //     json?.data.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
  //       .restaurants || [],
  //   ); //it is mandatory to put json ,  before starting the api call (as the cards are present in json)
  // };
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchRest = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()),
      );

      setFilteredRestaurants(searchRest);

      setSuggestions(searchRest.slice(0, 7));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, listOfRestaurants]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're disconnected !! Please make sure that you have good
        internet connection.
      </h1>
    );
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-between">
        <div className="relative">
          <input
            type="text"
            className="border border-black rounded m-5 p-2 w-[300px]"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {suggestions.length > 0 && searchText && (
            <div className="absolute left-5 bg-white border border-gray-300 rounded-md shadow-md w-[300px] z-10">
              {suggestions.map((restaurant) => (
                <div
                  key={restaurant.info.id + restaurant.info.name}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchText(restaurant.info.name);

                    setSuggestions([]);
                  }}
                >
                  <p className="font-semibold">{restaurant.info.name}</p>

                  <p className="text-sm text-gray-500">
                    {restaurant.info.cuisines.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="rounded-md bg-orange-500 p-1 m-4 px-2 text-white"
          onClick={() => {
            const toprated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(toprated);
            console.log("FILTERED toprated:", toprated); // Only >4
          }}
        >
          Top rated
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-items-start">
        {filteredRestaurants.map(
          (
            restaurant, //On each loop, restaurant is one element of resObj.
          ) => (
            <Link
              key={restaurant.info.id + "-" + restaurant.info.name}
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
