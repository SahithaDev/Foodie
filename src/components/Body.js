import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            console.log("FULL resObj:", resObj); // All items
            const toprated = resObj.filter((res) => res.info.avgRating > 4);
            console.log("FILTERED toprated:", toprated); // Only >4
          }}
        >
          Check Console
        </button>
      </div>
      <div className="res-card">
        {resObj.map(
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
