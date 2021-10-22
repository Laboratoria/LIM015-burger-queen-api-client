
import axios from "axios";

// import jwtDecode from 'jwt-decode'

let url = 'https://burger-queen-an.herokuapp.com/auth' //endpoint

const body = {
    email: 'admin@localhost',
    password: 'changeme'
}

const getToken = async (email) => {
    const apiResponse = await axios.post(url, body) // info to authentication
    switch (apiResponse.status) {
        case 200:
            const path = (`https://burger-queen-an.herokuapp.com/users/${email}`)
            console.log(path, 'path');
            const response = await axios.get(path, {
                headers: {
                    'Authorization': 'Bearer ' + apiResponse.data.token,
                    'Content-Type': 'application/json'
                }
            })

            // console.log(response.data, 'rspdata');
            return response.data

        case 404:
            // code block
            break;
        default:
        // code block
    }
}
export default getToken;
