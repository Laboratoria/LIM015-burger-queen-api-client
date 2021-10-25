import React, { useEffect, useState } from "react";
//import axios from  "axios";
import { getUser } from "../Authentication/auth"

const PAdmi = (props) => {

  //console.log(props.lerolero);

  return (

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.lerolero.length > 0 ?
            props.lerolero.map((user) => (
              <tr key={user.id}>
                <td> {user.email}</td>
                <td>{user.email}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>

            )) :

            (
              <tr>
                <td colSpan={3}> No USERS</td>
              </tr>
            )

        }

      </tbody>
    </table>

  )
}






const baseUrl = "https://burger-queenn.herokuapp.com/users"


const Admi = () => {

  const tokenN = localStorage.getItem("token");
  console.log(tokenN);

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

  }

  useEffect(() => {
    petitionGet();
  }, []);


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <PAdmi lerolero={users} />
        </div>
      </div>
    </div>
  )
}


export default Admi;





