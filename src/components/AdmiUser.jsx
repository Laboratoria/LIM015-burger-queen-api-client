import React, { useEffect, useState, Fragment } from "react";

import Button from "./Button";
//import iconDelete from "../img/iconDelete.svg";
import iconNegative from "../img/iconNegative.svg";
import iconAddUser from "../img/iconAddUser.svg";

//import axios from  "axios";
import { getUser } from "../Authentication/auth";
//import { addNewUser } from "../Authentication/auth";

import ModalAddUser  from "./Modal";

const PAdmi = ({users,getUsers}) => {
  
 

  const [showModal, setShowModal] = useState(false);


  return (

    <Fragment>

     <div>
     {showModal ? ( 
       <ModalAddUser  getUsers={getUsers} />
     ) : ""}

     </div>

      <table className="divide-y divide-blue-300  bg-white-200 shadow mt-2 rounded-2xl  ml-10 mx-4 p-4  ">
        <thead>
          <tr className=" bg-emerald-200  p-4">
            <th className="flex flex-row  gap-2 px-8 ">
              <button onClick={() => setShowModal(true)}>
                {" "}
                <img className="" src={iconAddUser} alt={""} />
              </button>
              USERS
            </th>
            <th className=" px-4 ">CHARGE</th>
            <th className="px-4 ">Actions</th>
          </tr>
        </thead>
        <tbody className=" ">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className=" px-4"> {user.email}</td>
                {user.roles.name ? <td>{user.roles.name}</td> : <td>admin</td>}
                <td className="flex flex-row  gap-2 justify-center  ">
                  <div>
                    {" "}
                    <img className="" src={iconNegative} alt={""} /> EDIT {" "}
                  </div>
                  <div>
                    {" "}
                    <img className="" src={iconNegative} alt={""} /> {" "}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}> No USERS</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

const baseUrl = "https://burger-queenn.herokuapp.com/users";

const AdmiUser = () => {


  const [users, setUsers] = useState([]);

  const petitionGet = async () => {
    const data = await getUser(baseUrl);
    setUsers(data.data);
    //setUsers(data);
    //console.log(data);
  };

  useEffect(() => {
    petitionGet();
  }, []);

  return (
    <Fragment>
               
        <div className="flex-row flex justify-center">
            <PAdmi users={users}  getUsers={petitionGet} />
        </div>
    
    </Fragment>
  );
};

export default AdmiUser;
