import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  //header
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div
        className="
  shadow-lg
  w-6/12
  mx-auto
  m-6
  p-4
  rounded-lg
  bg-gray-100
  dark:bg-gray-800
  text-black
  dark:text-white
  transition-colors
  duration-300
"
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <button className="text-orange-500 text-lg">🔽</button>
        </div>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
      {/* render item-list only
      if the showItems is true */}
    </div>
  );
};
export default RestaurantCategory;
