import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[500px] py-2">
        <div className="flex gap-x-[2px]">
          {page > 1 && (
            <button
              className="rounded-md py-[2px] px-1 border-2 mr-4"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md py-[2px] px-1 border-2"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
