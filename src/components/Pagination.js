const Pagination = (props) => {
  console.log("Pagination props:", props);

  const { noOfPages, currentPage, setCurrentPage } = props;
  const getPageNumbers = () => {
    const pages = [];

    console.log("Pagination component loaded");
    if (noOfPages <= 5) {
      for (let i = 1; i <= noOfPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", noOfPages);
      } else if (currentPage >= noOfPages - 2) {
        pages.push(1, "...", noOfPages - 2, noOfPages - 1, noOfPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          noOfPages,
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 rounded bg-orange-500 text-white disabled:bg-gray-400"
      >
        Prev
      </button>
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 font-bold">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              currentPage === page
                ? "bg-orange-600 text-white"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {page}
          </button>
        ),
      )}
      {/* Next */}
      <button
        disabled={currentPage === noOfPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 rounded bg-orange-500 text-white disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
