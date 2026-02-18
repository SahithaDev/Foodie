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
    <div className="text-center">
      <h1 className="font-bold text-xl my-4">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h2>{costForTwoMessage}</h2>

      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
