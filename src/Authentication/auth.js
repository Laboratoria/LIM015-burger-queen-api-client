import axios from "axios";

let url = "https://burger-queenn.herokuapp.com/auth"; //endpoint

const body = {
    email: "admin@localhost",
    password: "changeme",
};

/* Login Authentication */
export const loginAuth = async (body) => {
    try {
        const apiResponse = await axios.post(url, body);
        const tokenData = apiResponse.data.token;
        localStorage.setItem("token", tokenData);
        return tokenData;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message)
        }
    }
};


//get data of user with email.
export const getUserEmail = async (email) => {
    //console.log(token);
    const token = localStorage.getItem("token");
    const concatPath = `https://burger-queenn.herokuapp.com/users/${email}`;
    const response = await axios.get(concatPath, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

//get data of users

export const getUser = async (path) => {
    const apiResponse = await axios.post(url, body);
    const tokenN = apiResponse.data.token;
    return await axios
        .get(path, { headers: { Authorization: `Bearer ${tokenN}` } })
        .then((data) => {
            //console.log(data);
            return data;
        })
        .catch((err) => console.log(err));
};

// get data of products 

export const apiRequestToGetProducts = async (urlProduct) => {
    const token = localStorage.getItem("token");

    return await axios.get(urlProduct, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    });

}