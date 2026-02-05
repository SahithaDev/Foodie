import { useEffect } from "react";
import { MENU_URL } from "../utils/constant";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // useEffect(() => {
  //   fetchMenu();
  // }, [resId]);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  const resInfo = useRestaurantMenu(resId);
  // if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } = info || {};
  //console.log(info);
  const info1 =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const { itemCards } = info1 || [];
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
