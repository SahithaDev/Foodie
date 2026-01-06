import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
