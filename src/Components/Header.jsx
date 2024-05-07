import React from "react";
import {Link, NavLink} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ContextApi from "./useContext/ContextApi";
import Themes from "./Themes/Themes";
import AddTodo from "./Themes/BasicTodo/AddTodo";

function Header() {
  return (
    <>
      <div>
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className=" md:order-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
              <ul className="flex font-semibold justify-between">
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/"
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/about"
                    element={<About />}
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/Contact"
                    element={<Contact />}
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/context"
                    element={<ContextApi />}
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    useContext
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/add-todo"
                    element={<AddTodo />}
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    Todo
                  </NavLink>
                </li>
                <li className="md:px-4 md:py-2 ">
                  <NavLink
                    to="/themes"
                    element={<Themes />}
                    className={({isActive}) =>
                      ` ${isActive ? "text-red-500" : "text-orange-500"}`
                    }
                  >
                    Themes
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-3">
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>LogOut</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
