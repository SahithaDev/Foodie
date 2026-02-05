import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "../components/ShimmerUI";
const useRestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(0);
  const { resId } = useParams;
  useEffect(() => {
    fetchMenu();
  });
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setresInfo(json);
  };
  if (!resInfo) return <Shimmer />;
};
export default useRestaurantMenu;
