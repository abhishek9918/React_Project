import React, {useState, useContext} from "react";
import UserContext from "../../Context/userContext";
UserContext;

function ContextData() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, pswd);
    setUser({name, pswd});
  };

  return (
    <div className="  max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      Login
      <div className="my-3 py-2">
        <h2>login Check</h2>
        <div>
          <input
            className="form-input w-full px-4 py-2 rounded-lg border my-2 focus:outline-none "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-input w-full px-4 py-2 rounded-lg border focus:outline-none "
            type="text"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
        </div>
        <button
          className="border border-gray-200 my-3 p-2 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContextData;
