import Body from "./Body";
const Pagination = ({ noOfPages, setCurrentPage }) => {
  const pages = [...Array(noOfPages).keys()];
  return (
    <div>
      {pages.map((n) => (
        <button
          className="border border-black p-2 m-2"
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
