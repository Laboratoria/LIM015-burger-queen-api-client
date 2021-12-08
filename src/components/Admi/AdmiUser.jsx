import React, { useEffect, useState, Fragment } from "react";


//import iconDelete from "../img/iconDelete.svg";

import iconAddUser from "../../img/iconAddUser.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons';

//import axios from  "axios";
import { getUser } from "../../Authentication/auth";
//import { addNewUser } from "../Authentication/auth";

import ModalAddUser from './Modal';


const PAdmi = ({ users, getUsers }) => {


  const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [userSele, setUserSele] = useState([]);



  const userSelection = (user, option) => {
    setUserSele(user);
    (option === "edit") ? setModalEdit(true) : setModalDelete(true)
  }


  return (

    <Fragment>

      <div>
        {showModal ? (
          <ModalAddUser
            getUsers={getUsers}
            showModal={showModal}
            setShowModal={setShowModal} />
        ) : ""}

      </div>

      <div>
        {modalEdit ? (
          <ModalAddUser
            getUsers={getUsers}
            modalEdit={modalEdit}
            setModalEdit={setModalEdit}
            userSele={userSele}
          />
        ) : " "
        }
      </div>
      <div>
        {modalDelete ? (
          <ModalAddUser
            getUsers={getUsers}
            modalDelete={modalDelete}
            setModalDelete={setModalDelete}
            userSele={userSele}
          />
        ) : " "
        }
      </div>

      <table className="divide-y divide-black  divide-opacity-4 bg-white-200  shadow-md  mt-2 rounded-2xl  ">
        <thead>
          <tr className=" font-bold   p-4">
            <th className="flex flex-row  gap-2 px-12 py-3">
              <button onClick={() => setShowModal(true)}>
                {" "}
                <img className="" src={iconAddUser} alt={""} />
              </button>
              USERS
            </th>
            <th className=" px-10 py-3">CHARGE</th>
            <th className="px-10 py-3 "> </th>
          </tr>
        </thead>
        <tbody className=" divide-y-2 divide-black divide-opacity-10">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className=" px-10"> {user.email}</td>
                {user.roles.name ? <td  className="px-10 " >{user.roles.name}</td > : <td className="px-10 " >admin</td>}
                <td className="flex flex-row  gap-2 justify-center py-2 mx-10 ">
                  <div>                          
                       <FontAwesomeIcon  className="cursor-pointer text-lime-400"  onClick={() => userSelection(user, "edit")} icon={faEdit} />
                  </div>
                  <div>
                    <FontAwesomeIcon className="cursor-pointer text-teal-500 " onClick={() => userSelection(user, "delete")} icon={faTrashAlt} />
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



const AdmiUser = () => {
  const baseUrl = "https://burger-queenn.herokuapp.com/users";
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
        <PAdmi users={users} getUsers={petitionGet} />
      </div>
    </Fragment>
  );
};

export default AdmiUser;
