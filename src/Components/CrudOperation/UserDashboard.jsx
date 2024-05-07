import React, {useEffect, useId, useState} from "react";
import {Link} from "react-router-dom";
import Loader from "./Loader";
import {TodoContext} from "../../Context/crud-store";
import NoData from "./NoData";
import UserList from "./UserList";

function UserDashboard() {
  const [list, setList] = useState([]);

  const [isFetching, setFetched] = useState(false);
  const id = useId();
  useEffect(() => {
    console.log("data");
    setFetched(true);
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setFetched(false);
          setList(data);
        }, 1000);
      });
  }, []);

  const onDeleteList = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <TodoContext.Provider value={{list, onDeleteList}}>
        <div className="text-left my-1">
          <Link to="/user-forms">
            <button className="border text-right border-1 text-lg font-medium hover:bg-black/60 hover:text-white hover:font-semibold border-yellow-500 px-4 py-1">
              Add List
            </button>
          </Link>
        </div>
        {isFetching && <Loader></Loader>}
        {!isFetching && <UserList />}
        <NoData></NoData>
      </TodoContext.Provider>
    </>
  );
}

export default UserDashboard;
