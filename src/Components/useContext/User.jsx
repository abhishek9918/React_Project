import React, {useContext} from "react";
import UserContext from "../../Context/userContext";
UserContext;
function User() {
  const {user} = useContext(UserContext);
  console.log(user, "user");
  if (!user) return <div>Please login</div>;
  return <div>{user.name}</div>;
}

export default User;
