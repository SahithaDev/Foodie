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
    <div>
      <h1 className="text-3xl m-6 p-4 text-center font-bold">Cart</h1>
      <div className="flex justify-center">
        <button
          className=" bg-slate-200 p-2 m-2 rounded-lg "
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <ItemList items={cartItems} showRemove={true} />

        {cartItems.length === 0 && (
          <h1 className="text-center">
            Add something before your cravings file a complaint 😤
          </h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
