import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center pt-8 pb-4">About Us</h1>
      <UserContext.Provider value={{ userName: "Sahitha" }}>
        <UserClass />
      </UserContext.Provider>
    </div>
  );
};
export default About;
