import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <h1 className="text-3xl m-6 p-4 text-center font-bold text-black dark:text-white"></h1>
      <div className="flex justify-center">
        <button
          className="
bg-orange-500
hover:bg-orange-600
text-white
font-semibold
px-5
py-2
m-2
rounded-lg
shadow-md
transition-all
duration-300
"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <ItemList items={cartItems} showRemove={true} />

        {cartItems.length === 0 && (
          <h1 className="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
            Add something before your cravings file a complaint 😤
          </h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
