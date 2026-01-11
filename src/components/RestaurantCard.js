import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  /** here resData  is used as props to make it reusable (that is the main concept of react), 
  even if reObj is removed , name will still be printed as we are using props , props are used to pass 
  from parent component to a child component**/
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-name">{name}</div>
      <div className="cuisine">{cuisines.join(",")}</div>
      <div className="rating">{avgRating}</div>
      <div className="deliveryTime">{deliveryTime}</div>
    </div>
  );
};
export default RestaurantCard;
