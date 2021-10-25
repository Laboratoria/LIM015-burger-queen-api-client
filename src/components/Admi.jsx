
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState, Fragment } from "react";
import NavOpcion from './nav';
import admi from '../img/admi.svg';
import Button from './Button';
//import iconDelete from "../img/iconDelete.svg";
import iconNegative from "../img/iconNegative.svg";
import iconAddUser from "../img/iconAddUser.svg";


//import axios from  "axios";
import { getUser } from "../Authentication/auth"


const PAdmi = (props) => {

    //console.log(props.lerolero);

    return (
      
    <table className="divide-y divide-blue-300  ">
          
    <thead >
      <tr className=" bg-emerald-200  p-4">
        <th className="flex flex-row  gap-2 px-8 "> <img className="" src={iconAddUser} alt={""} /> USERS </th>
        <th className=" px-4 ">CHARGE</th>
        <th className="px-4 ">Actions</th>
      </tr>
    </thead>
    <tbody  className=" ">
        {
            props.lerolero.length>0? 
            props.lerolero.map( (user) => (
            <tr key={user.id} >
                <td className=" px-4"> {user.email}</td>
                {user.roles.name?
                <td>{user.roles.name}</td>:
                <td>admin</td>
                }
                <td className="flex flex-row  gap-2 justify-center  ">
                                
                <div > <img className="" src={iconNegative} alt={""} /> </div>
                <div> <img className="" src={iconNegative} alt={""} /> </div>
               

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


const [users, setUsers] = useState( []);



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
  <Fragment>

    <NavOpcion 
  imgOption={admi}
  option="ADMI"
   />



  <div className="container ">

    <div>
    <Button type={'primary'} name={'USERS'} />
    <Button type={'secondary'} name={'PRODUCTS'} />

    </div>


      <div className="flex-row">


          <div className="bg-white-200 shadow mt-2 rounded-2xl  ml-10 mx-4 p-4">
            
            <PAdmi lerolero={users} />
          </div>
        </div>
  </div>
  </Fragment>
  
    )
  }


  
  export default Admi;






