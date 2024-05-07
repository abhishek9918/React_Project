import React, {useContext} from "react";
import {TodoContext} from "../../Context/crud-store";
import {Link} from "react-router-dom";
import {MdDelete} from "react-icons/md";
import {RiEditFill} from "react-icons/ri";
import {FaStreetView} from "react-icons/fa6";
function UserList() {
  const {list, onDeleteList} = useContext(TodoContext);
  console.log(list);
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-black/40">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium text-white uppercase tracking-wider text-center"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map((item, index) => (
            <tr key={item.id || index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm  text-left text-gray-500">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-left text-sm text-gray-500">
                {item.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-center">
                <Link to={`/updateUser/${item.id}`}>
                  <button className=" border border-1 px-4 py-1 border-purple-400 text-indigo-600 hover:text-indigo-900">
                    <RiEditFill />
                  </button>
                </Link>
                <Link to={`/View/${item.id}`}>
                  <button className=" border border-1 mx-1 px-4 py-1 border-green-400 text-indigo-600 hover:text-orange-400">
                    <FaStreetView />
                  </button>
                </Link>
                <button
                  onClick={() => onDeleteList(item.id)}
                  className="border border-1 px-4 py-1 border-red-200 ml-2 text-red-600 hover:text-red-900"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
