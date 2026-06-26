import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import ThemeContext from "../utils/ThemeContext";
import ThemeContext from "../utils/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="w-[110px]">
        <img src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center p-6 m-3 py-6 gap-8 font-semibold text-md text-black dark:text-white">
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
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex items-center w-16 h-8 rounded-full transition-all duration-300
      ${darkMode ? "bg-gray-700" : "bg-orange-200"}`}
            >
              <div
                className={`absolute flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white shadow-md transition-all duration-300
        ${darkMode ? "translate-x-8" : "translate-x-0"}`}
              >
                {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
              </div>
            </button>
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
