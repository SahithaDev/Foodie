import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, showRemove }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="w-6/12 text-left  p-2 m-2 mx-auto border-gray-200 border-b-2 px-4"
        >
          <div className="p-2 m-2 flex justify-between">
            {/* <div className="w-1/5 ">
              <img src={CDN_URL + item.card.info.imageId} />
            </div> */}
            <div className="w-4/5 text-left px-4">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
              <p className="text-xs text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-1/5 ">
              {/* <img src={CDN_URL + item.card.info.imageId} /> */}
              <button
                className="bg-green-300 p-1 px-5shadow-lg rounded-md absolute m-2 mx-11 font-bold my-14"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
              {showRemove && (
                <button
                  onClick={() => handleRemove(item)}
                  className="rounded-lg"
                >
                  Remove
                </button>
              )}
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
            {/* <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
