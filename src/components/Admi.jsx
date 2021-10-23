
import React, { useEffect, useState } from "react";
import axios from  "axios";




const PAdmi = (props) => {

    console.log(props.lerolero);

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
            props.lerolero.length>0? 
            props.lerolero.map( (user) => (
            <tr key={user.id}>
                <td> {user.name}</td>
                <td>{user.username}</td>
                <td>
                <button className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
                </td>
            </tr>
     
            ) ):

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



const Admi = () => {

    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ] 
    
      const [users, setUsers] = useState( usersData);

  /*const url=

 const getData =() => {
 axios.get(url).

 }


 useEffect(() => {
 

 },[])*/
 


  
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





