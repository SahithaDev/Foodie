import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg ">
      <div className="w-[110px]">
        <img src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex p-6 m-3 py-6 gap-8 font-semibold text-md ">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>

          <button
            className="bg-orange-500 text-white rounded-md px-5 py-3 p-2"
            onClick={() => {
              setloginBtn(loginBtn === "Login" ? loggedInUser : "Login");
              // loginBtn === "Login"
              //   ? setloginBtn(loggedInUser)
              //   : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
