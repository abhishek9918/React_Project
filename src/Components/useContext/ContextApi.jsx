import React from "react";
import UserContextProvider from "../../Context/ContextProvider";
import User from "./User";
import ContextData from "./ContextData";

function ContextApi() {
  return (
    <UserContextProvider>
      <ContextData></ContextData>
      <User></User>
    </UserContextProvider>
  );
}

export default ContextApi;
