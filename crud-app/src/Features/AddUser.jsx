import React from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./User/UserSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    // console.log(values);
  };
  return (
    <div className="mb-10 max-w-xl mx-auto">
      <TextField
        Inputlable="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Prath pol" }}
      />
      <br />
      <TextField
        Inputlable="Email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
        inputProps={{ type: "email", placeholder: "prath@mail.com" }}
      />
      <Link to="/">
        <button
          className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
          onClick={handleAddUser}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default AddUser;
