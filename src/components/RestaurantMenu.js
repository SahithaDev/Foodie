import { useEffect } from "react";
import { MENU_URL } from "../utils/constant";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage } = info;

  const groupedCard = resInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR,
  );

  const categories =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  return (
    <div className="text-center bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <h1 className="font-bold text-2xl my-4 text-black dark:text-white"></h1>
      <h3 className="text-gray-700 dark:text-gray-300">
        {cuisines.join(", ")}
      </h3>
      <h2 className="font-semibold text-orange-500 mb-4">
        {costForTwoMessage}
      </h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
