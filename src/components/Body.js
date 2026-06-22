import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import mockData from "../utils/mockData.json";
import useOnlineStatus from "../utils/useOnlineStatus";
import Pagination from "./Pagination";

const Body = () => {
  // stores all restaurants
  const [listOfRestaurants, setlistOfRestaurants] = useState(mockData);

  // stores filtered restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockData);

  // stores search input
  const [searchText, setSearchText] = useState("");

  // stores autocomplete suggestions
  const [suggestions, setSuggestions] = useState([]);

  // tracks current page
  const [currentPage, setCurrentPage] = useState(1);

  // total restaurants after filtering
  const totalItems = filteredRestaurants.length;

  // restaurants per page
  const itemsPerPage = 8;

  // total pages
  const noOfPages = Math.ceil(totalItems / itemsPerPage);

  // starting index
  const startPage = (currentPage - 1) * itemsPerPage;

  // ending index
  const endPage = startPage + itemsPerPage;

  // restaurants for current page
  const currentRestaurants = filteredRestaurants.slice(startPage, endPage);

  // debouncing search
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchRest = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()),
      );

      setFilteredRestaurants(searchRest);

      setSuggestions(searchRest.slice(0, 7));

      // reset to first page after search
      setCurrentPage(1);
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
      {/* Search + Filter Section */}

      <div className="flex justify-between">
        {/* Search Input */}

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

          {/* Suggestions Dropdown */}

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

        {/* Top Rated Button */}

        <button
          className="rounded-md bg-orange-500 p-1 m-4 px-2 text-white"
          onClick={() => {
            const toprated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );

            setFilteredRestaurants(toprated);

            // reset page
            setCurrentPage(1);
          }}
        >
          Top rated
        </button>
      </div>

      {/* Restaurant Cards */}

      <div className="flex flex-wrap gap-10 justify-items-start">
        {currentRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id + "-" + restaurant.info.name}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center m-8">
        {noOfPages > 1 && (
          <Pagination noOfPages={noOfPages} setCurrentPage={setCurrentPage} />
        )}
      </div>
    </div>
  );
};

export default Body;
