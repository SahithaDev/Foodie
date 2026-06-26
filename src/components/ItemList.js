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
          className="
w-6/12
text-left
p-2
m-2
mx-auto
px-4
border-b-2
border-gray-200
dark:border-gray-700
text-black
dark:text-white
transition-colors
duration-300
"
        >
          <div className="p-2 m-2 flex justify-between">
            {/* <div className="w-1/5 ">
              <img src={CDN_URL + item.card.info.imageId} />
            </div> */}
            <div className="w-4/5 text-left px-4">
              <span className="font-semibold">{item.card.info.name}</span>

              <span className="font-semibold text-orange-500">
                {" "}
                - ₹ {item.card.info.price / 100}
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-1/5 ">
              {/* <img src={CDN_URL + item.card.info.imageId} /> */}
              <button
                className="
absolute
m-2
mx-11
my-14
bg-orange-500
hover:bg-orange-600
text-white
font-bold
px-5
py-2
rounded-md
shadow-lg
transition-all
duration-300
"
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
              <img
                className="
mt-2
bg-red-500
hover:bg-red-600
text-white
rounded-md
px-3
py-1
transition-all
duration-300
"
                src={CDN_URL + item.card.info.imageId}
              />
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
