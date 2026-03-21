import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  //header
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div className=" shadow-lg w-6/12 mx-auto m-6 bg-gray-100 p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <button>🔽</button>
        </div>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
      {/* render item-list only
      if the showItems is true */}
    </div>
  );
};
export default RestaurantCategory;
