import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const getUser = await axios.get(
        `https://668d4175099db4c579f24e88.mockapi.io/student/${id}`
      );

      setUserInput(getUser.data);
    };

    data();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, mobile, email, password } = userInput;

    const postData = await axios.put(
      `https://668d4175099db4c579f24e88.mockapi.io/student/${id}`,
      {
        name,
        age,
        mobile,
        email,
        password,
      }
    );

    if (postData) {
      navigate("/");
    }
  };

  return (
    <div className="createUser_form">
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }} className="mb-5">
          Edit User
        </h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="name"
            value={userInput.name}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="age"
            value={userInput.age}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="mobile"
            value={userInput.mobile}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="email"
            value={userInput.email}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="password"
            value={userInput.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
