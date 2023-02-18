import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { store } from "../../Store";

import TextField from "../../components/TextField";
import { edituser } from "./UserSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      edituser({
        id: params.id,
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
          onClick={handleEditUser}
        >
          Edit
        </button>
      </Link>
    </div>
  );
};

export default EditUser;
