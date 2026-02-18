import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
