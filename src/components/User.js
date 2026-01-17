import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
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
