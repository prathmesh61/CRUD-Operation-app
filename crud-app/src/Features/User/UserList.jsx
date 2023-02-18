import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Edit, Trash } from "../../Icon/Icon";
import { store } from "../../Store";
import { useSelector, useDispatch } from "react-redux";
import { deleteuser } from "./UserSlice";

const UserList = () => {
  const users = useSelector((store) => store.users);
  // console.log(users);
  // const users = [
  //   { id: "1", name: "prathmesh", email: "prath1@mail.com" },
  //   { id: "2", name: "namdev", email: "nam1@mail.com" },
  // ];
  //   console.log(users);
  const dispatch = useDispatch();

  const handleRemoveUser = (id) => {
    dispatch(deleteuser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={user.id}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700 ">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <Edit />
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <Trash />
          </button>
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <Link to="/add-user">
          <Button> Add User</Button>
        </Link>
        <div className="grid gap-5 md:grid-cols-2">
          {users.length > 0 ? (
            renderCard()
          ) : (
            <p className="bg-gray-700 text-white w-fit  px-4 py-1   text-2xl">
              No Users
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
