import React, {useEffect, useState} from "react";
import {TodoContext} from "../../Context/crud-store";
import {Link, useParams} from "react-router-dom";
function ViewUser() {
  const {id} = useParams();
  const [viewData, setViewData] = useState("");

  useEffect(() => {
    if (id) {
      console.log(id);
      fetch("http://localhost:3000/users/" + id)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setViewData(response);
        });
    }
  }, [id]);
  return (
    <>
      <div className="bg-black/40 shadow-md rounded-md p-4 max-w-xs mx-auto">
        <div className="text-xl text-white font-semibold mb-2 underline leading-4 tracking-wide">
          User Information
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">ID:</span>
            <span className="font-semibold">{viewData.id}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Name:</span>
            <span className="font-semibold">{viewData.name}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Email:</span>
            <span className="font-semibold">{viewData.email}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Phone:</span>
            <span className="font-semibold">{viewData.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
