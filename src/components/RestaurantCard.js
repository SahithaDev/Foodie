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
    costForTwo,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] rounded-md hover:bg-gray-300 cursor-pointer bg-gray-100">
      <div className="">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="font-bold py-3 text-lg">{name}</div>
      <div className="">{cuisines.join(" , ")}</div>
      <div className="costfortwo">{costForTwo}</div>
      <div className="rating">{avgRating}⭐</div>
      <div className="deliveryTime">{deliveryTime} minutes</div>
    </div>
  );
};
export default RestaurantCard;
