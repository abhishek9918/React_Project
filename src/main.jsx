import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import ContextApi from "./Components/useContext/ContextApi.jsx";
import Themes from "./Components/Themes/Themes.jsx";
import AddTodo from "./Components/Themes/BasicTodo/AddTodo.jsx";
import UserDashboard from "./Components/CrudOperation/UserDashboard.jsx";
import UserForm from "./Components/CrudOperation/UserForm.jsx";
import ViewUser from "./Components/CrudOperation/ViewUser.jsx";
import UserList from "./Components/CrudOperation/UserList.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="context" element={<ContextApi />} />
      <Route path="themes" element={<Themes />} />
      <Route path="add-todo" element={<AddTodo />} />
      <Route path="userDashboard" element={<UserDashboard />} />
      <Route path="user-forms" element={<UserForm />} />
      <Route path="updateUser/:id" element={<UserForm />} />
      <Route path="View" element={<ViewUser />} />
      <Route path="View/:id" element={<ViewUser />} />
      <Route path="userList" element={<UserList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
