const RestaurantCategory = ({ data }) => {
  //header
  return (
    <div>
      <div className=" shadow-lg w-6/12 mx-auto m-6 bg-gray-100 p-4 flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <button>🔽</button>
      </div>
    </div>
  );
  ///accordion-body
};
export default RestaurantCategory;
