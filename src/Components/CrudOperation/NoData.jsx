import React, {useContext} from "react";
import {TodoContext} from "../../Context/crud-store";
import {Link} from "react-router-dom";

function NoData() {
  const list = useContext(TodoContext);
  return (
    <>
      {list.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 h-full  flex flex-col-reverse justify-center">
          <span className="text-center">
            <Link to="/user-forms">
              <button className="border border-1 text-lg font-medium hover:bg-black/40 hover:text-white hover:font-semibold border-black/10  px-4 py-1">
                Add List
              </button>
            </Link>
          </span>
          <div>
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default NoData;
