import React from "react";
import UserList from "./Features/User/UserList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddUser from "./Features/AddUser";
import EditUser from "./Features/User/EditUser";

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700 mb-10">
        CRUD With Redux Toolkit
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
