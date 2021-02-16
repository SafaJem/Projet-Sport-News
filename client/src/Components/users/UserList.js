import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/actions/adminAction";
import UserCard from "./UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

const users = useSelector((state)=>state.adminReducers.users);
  return (
    <div >
      { users &&
        users.map((user)=>(<UserCard key={user._id} user={user} />))
      }
          

       
    </div>
  );
};

export default UserList;