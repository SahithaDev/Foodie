import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h1>{userName}</h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
export default User;
