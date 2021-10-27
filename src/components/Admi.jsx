import React, { useEffect, useState, Fragment } from "react";
import NavOpcion from "./nav";
import admi from "../img/admi.svg";
import Button from "./Button";
//import iconDelete from "../img/iconDelete.svg";
import iconNegative from "../img/iconNegative.svg";
import iconAddUser from "../img/iconAddUser.svg";

//import axios from  "axios";
import { getUser } from "../Authentication/auth";
import { addNewUser } from "../Authentication/auth";

//import { ModalAddUser } from "./modal";

const PAdmi = (props) => {
  //console.log(props.lerolero);

  const [form, setForm] = useState({
      email:"",
      password:"",

          
  });

  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = useState('');

  const [ isAdmin, setisAdmin]=useState(false);

  
  const saveChange = (e) => {
    console.log("capture");
    setForm({
            
      ...form,
      [e.target.name]:e.target.value,
      roles:{
        admin:isAdmin,
        name:e.target.name==="roles"?e.target.value:""}
    });
    
  };


  const sendForm = async (e) => {
    e.preventDefault();
    console.log(form);

    const urlUser="https://burger-queenn.herokuapp.com/users"
    await addNewUser(urlUser,form);
    console.log("hackerrang");

  };

  return (
    <Fragment>
      <div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">CREATE USER</h3>

                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>

                  </div>
                  {/*body*/}
                  <form onSubmit={sendForm} className="text-center">
                      <div>
                        <input
                          className="input input--email"
                          type="text"
                          placeholder="Add Email"
                          name={"email"}
                          onChange={saveChange}
                          required
                        />
                      </div>

                      <div>
                        <input
                          className="input input--password"
                          type="password"
                          placeholder=" add Password"
                          name={"password"}
                          onChange={saveChange}
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="input input--password"
                          type="text"
                          placeholder="roles : chef , admi or waiter "
                          name={"roles"}          
                          onChange={saveChange}
                          required
                        />
                      </div>
                      <div>
                      <label> 
                      <input type='checkbox' name="admin" defaultChecked={isAdmin}  onChange={()=> setisAdmin(!isAdmin)} />  is admin
                       </label> 
                                         

                      </div>

                      {error ? (
                        <div>
                          <p className="text-red-500 text-sm text-lg pb-2">
                            {error}
                          </p>
                        </div>
                      ) : null}

                      <div>
                       
                      </div>
                     
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: bg-teal-500 shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type={"submit"}>
                          SAVE
                        </button>
 
                    <button
                      className=" bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: shadow-lg outline-none focus: bg-teal-500  outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type={"submit"}
                      onClick={() => setShowModal(false)}
                    >
                     CANCEL
                    </button>
                  </div>
                    
                    </form>

                  <div className="relative p-6 flex-auto"></div>

                  {/*footer*/}

                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>



      <table className="divide-y divide-blue-300  ">
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
          {props.lerolero.length > 0 ? (
            props.lerolero.map((user) => (
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

const Admi = () => {
  //const tokenN = localStorage.getItem("token");
  //console.log(tokenN);

  /*const data=[{
    "id":"id1",
    "email":"ninoskachef1@cgr.com",
    "password":"Chef1$",
    "roles":{
        "admi":"true",
        "name":"Admin"}
    },{
    "id":"id2",
    "email":"alisoncheff1@cgr.com",
    "password":"Chef+nf1$",
    "roles":{
        "admi":"false",
        "name":"chef"}
    },
    {
    "id":"id2",
    "email":"waiterda1@cgr.com",
    "password":"waiter1$",
    "roles":{
        "admi":"false",
        "name":"waiter"}
      
    }]*/

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
      <NavOpcion imgOption={admi} option="ADMI" />

      <div className="container ">
        <div>
          <Button type={"primary"} name={"USERS"} />
          <Button type={"secondary"} name={"PRODUCTS"} />
        </div>

        <div className="flex-row">
          <div className="bg-white-200 shadow mt-2 rounded-2xl  ml-10 mx-4 p-4">
            <PAdmi lerolero={users} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admi;
