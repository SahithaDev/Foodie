import Body from "./Body";
const Pagination = ({ noOfPages, setCurrentPage }) => {
  const pages = [...Array(noOfPages).keys()];
  return (
    <div>
      {pages.map((n) => (
        <button
          className="
bg-orange-500
text-white
rounded
px-4
py-2
mx-1
hover:bg-orange-600
"
          key={n}
          onClick={() => setCurrentPage(n + 1)}
        >
          {n + 1}
        </button>
      ))}
    </div>
  );
  np;
};
export default Pagination;
