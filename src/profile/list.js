import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as client from "./client";
import { BsPencil, BsFillCheckCircleFill, BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs"
import { MdOutlineInsertLink } from "react-icons/md";

function UserList() {
  var account = useSelector((state) => state.accountReducer.account);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const [credentials, setCredentials] = useState({
    username: user.username,
    password: "",
    role: user.role,
  });
  const deleteUser = async (user) => {
    console.log(user);
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    console.log(user);
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user._id, credentials);
      //const status = await client.updateUser(user);
      //setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
            <td>
                <b>Username</b>
            </td>
            <td>
                <b>First Name</b>
            </td>
            <td>
                <b>Last Name</b>
            </td>
        </tr>
        <tr>
            <td>
              <input placeholder={user.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
              <input placeholder={user.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}/>
            </td>
            <td>
              <input placeholder={user.firstName} onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}/>
            </td>
            <td>
              <input placeholder={user.lastName} onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}/>
            </td>
            <td>
              <select placeholder={user.role} onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="BUSINESS_OWNER">Business Owner</option>
              </select>
            </td>
            <td className="text-nowrap">
                <BsPlusCircleFill onClick={createUser}  
                className="text-primary fs-1 text" />
                <BsFillCheckCircleFill onClick={updateUser}
                className="me-2 text-success fs-1 text" />
            </td>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button className="btn btn-success me-2">
                <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
                <button className="btn btn-success me-2">
                <BsPencil onClick={() => selectUser(user)} />
                </button>
                {/* <Link to={`/FoodPilot/profile/${user._id}`} */}
                <Link to={`/FoodPilot/profile/${user._id}`}
                  className="btn btn-primary button">
                  Profile
                </Link>
            </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;