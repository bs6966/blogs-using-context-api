import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border fixed bottom-0 bg-black">
      <div className="flex justify-between w-11/12 max-w-[650px] py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="rounded-md border px-5 py-2 "
              onClick={() => handlePageChange(page - 1)}
              on
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border px-5 py-2 "
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="text-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
