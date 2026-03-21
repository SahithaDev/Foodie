import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <UserContext.Provider value={{ userName: "Sahitha" }}>
        <UserClass />
      </UserContext.Provider>
    </div>
  );
};
export default About;
