import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Style from "./Forms.module.css";

function UserForm() {
  const [isFormValid, setFormValid] = useState(false);

  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   validateForm();
  // }, [formData]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({...formData, [name]: value});
  };

  useEffect(() => {
    console.log(isSubmit, formData);
    if (Object.keys(errors).length === 0 && isSubmit) {
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetch("http://localhost:3000/users/" + id)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setFormValue(data);
        });
    }
  }, [id]);

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    setIsSubmit(true);

    console.log("dd");
    if (Object.keys(errors).length === 0 && isSubmit) {
      if (id) {
        console.log("id fopund");
        fetch("http://localhost:3000/users/" + id, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            if (res) {
              setFormValue(res);
              navigate("/userDashboard");
            }
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            navigate("/userDashboard");
          })
          .catch((err) => {});
      }
    }
  };

  const validateForm = (newErrors) => {
    console.log(newErrors);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const phoneLimit = "1234567890";

    let valid = true;
    let isError = {};

    if (!newErrors.name) {
      isError.name = "Name is required";
    }
    if (!newErrors.phone) {
      isError.phone = "Phone is required";
    }
    if (!newErrors.email) {
      isError.email = "Email is required";
    } else if (!emailPattern.test(newErrors.email)) {
      isError.email = "Invalid email format";
    }
    if (!newErrors.phone) {
      isError.phone = "Phone is required";
    } else if (!phonePattern.test(newErrors.phone)) {
      isError.phone = "Phone is Not Valid";
    } else if (
      newErrors.phone.length > phoneLimit.length ||
      newErrors.phone.length < phoneLimit.length
    ) {
      isError.phone = "phone number should be in 10 digits";
    }
    return isError;
  };

  return (
    <div className={`${Style.Forms}`}>
      <div className={`${Style.FormContainer}`}>
        <div className="p-6">
          {Object.keys(errors).length === 0 && isSubmit ? (
            <p>successful</p>
          ) : (
            <p>unsuccessful</p>
          )}
          <div>
            <h2 className="text-lg font-semibold mb-2   ">User Form</h2>
          </div>
          <form onSubmit={onSubmitForm}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={formData.name}
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
              ></input>

              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                value={formData.email}
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
              ></input>

              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                phone
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="text"
                value={formData.phone}
                name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Enter your phone"
              ></input>

              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className={`w-full  text-white font-semibold px-4 py-2 rounded-lg  focus:outline-none  
                 ${
                   Object.keys(errors).length === 0 && isSubmit
                     ? "bg-blue-500 "
                     : "bg-blue-200"
                 }`}
              >
                Submit
              </button>
              <span className="font-extrabold text-xs hover:underline tracking-wider leading-4">
                <Link to="/userDashboard">
                  <span> View Master Table</span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
