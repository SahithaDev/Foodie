import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
const resObj = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId: "rng/md/carousel/production/pizza123",
      locality: "MG Road",
      areaName: "Central District",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "10K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  /** here resData  is used as props to make it reusable (that is the main concept of react), 
  even if reObj is removed , name will still be printed as we are using props , props are used to pass 
  from parent component to a child component**/
  const { name } = resData?.info;
  return (
    <div className="card">
      <div className="res-name">{name}</div>
      <div className="res-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed" />
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-card">
        {resObj.map(
          (
            restaurant //On each loop, restaurant is one element of resObj.
          ) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
