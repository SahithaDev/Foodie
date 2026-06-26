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
    <div
      className="m-4 p-4 w-[300px] rounded-md cursor-pointer
bg-gray-100
dark:bg-gray-800
hover:bg-gray-300
dark:hover:bg-gray-700
text-black
dark:text-white
transition-all
duration-300
shadow-md"
    >
      <div className="">
        <img
          className="rounded-md w-full h-48 object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="font-bold py-3 text-lg">{name}</div>
      <div className="text-gray-700 dark:text-gray-300">
        {cuisines.join(", ")}
      </div>
      <div className="font-semibold">{costForTwo}</div>
      <div className="text-green-600 font-semibold">⭐ {avgRating}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {deliveryTime} minutes
      </div>
    </div>
  );
};
export default RestaurantCard;
