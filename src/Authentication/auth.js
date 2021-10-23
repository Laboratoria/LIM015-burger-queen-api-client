
//import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import Cookies from 'universal-cookie';

// import jwtDecode from 'jwt-decode'

let url = 'https://burger-queen-an.herokuapp.com/auth' //endpoint

const body = {
    email: 'admin@localhost',
    password: 'changeme'
}


console.log( "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjc4NWExMDBlMDdmZmZkNTIyNmVjOSIsImlhdCI6MTYzNDk1NDI3NCwiZXhwIjoxNjM1MDQwNjc0fQ.Fb4qZ0LyfLIkLr5yceFqLVdtVwLHP2P5rfbb0II8670");

const getToken = async (email) => {
    const apiResponse = await axios.post(url, body) 
        const token = apiResponse.data.token;
        
        const cookies = new Cookies();
        cookies.set('myToken', {token}, { path: '/' });
        const tokenN = cookies.get('myToken')
    

    /*
     axios.post("https://burger-queen-an.herokuapp.com/users", {

        headers: {
        'Authorization': 'Bearer ' + tokenN,
        'Content-Type': 'application/json'
        },
        body: {
         "email":"matias82@gmail.com",
         "password":"Natias13$",
         "roles":{"chef":true}
    
        },

     }).then( res => console.log(res))*/

     
    
    // info to authentication
    switch (apiResponse.status) {
        case 200:
            const path = (`https://burger-queen-an.herokuapp.com/users/${email}`)
           // console.log(path, 'path');
            const response = await axios.get(path, {
                headers: {
                    'Authorization': 'Bearer ' + apiResponse.data.token,
                    'Content-Type': 'application/json'
                }
            })

            console.log(response.data, 'rspdata');
            return response.data

        case 404:
            // code block
            break;
        default:
        // code block
    }
}
export default getToken;


