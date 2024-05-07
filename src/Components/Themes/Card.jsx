import React from "react";

function Card({children}) {
  return (
    <>
      <div className="w-full">
        <div className="flex m-10 max-w-sm mx-auto justify-center flex-col dark:bg-gray-800 dark:text-black  border shadow-sm rounded-xl ">
          <img
            className="w-full h-auto rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Card title
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
