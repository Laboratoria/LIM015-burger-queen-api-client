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

export const getDataApi = async (urlProduct) => {
    const token = localStorage.getItem("token");

    return await axios.get(urlProduct, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    });
}

//getUser("https://burger-queenn.herokuapp.com/users").then( r => console.log(r))



//add new user or product or orders 

export const petitionPostAdd= async (urlUP,data) => {
    const token = localStorage.getItem("token");
    
    return axios({
        url:urlUP,
        method:"POST",
        data:data,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })


}




//delete user or product 

export const petitionDelete= async (urlUP,idUP) => {
    const token = localStorage.getItem("token");
   
    return axios({
        url:urlUP+idUP,
        method:"DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
}





//edit user or product 
export const petitionPutEdit= async (urlUP,idUP,newData) => {
    const token = localStorage.getItem("token");
   
    return axios({
        url:urlUP+idUP,
        method:"PUT",
        data:newData,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
}


