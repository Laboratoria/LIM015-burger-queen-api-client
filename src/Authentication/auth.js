import axios from "axios";

let url = "https://burger-queenn.herokuapp.com/auth"; //endpoint

const body = {
  email: "admin@localhost",
  password: "changeme",
};

const getTokenN = async (url, body) => {
  const apiResponse = await axios.post(url, body);
  const tokenData = apiResponse.data.token;
  localStorage.setItem("token", tokenData);
  const token = localStorage.getItem("token");
  //console.log(token);

  return token;
};


//get data of user with email.
export const getUserEmail = async (email) => {
  const token = await getTokenN(url, body);
  //console.log(token);
  const concatPath = `https://burger-queenn.herokuapp.com/users/${email}`;
  const response = await axios.get(concatPath, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);

  return response.data;
};


//get data of users

export const getUser = async (path) => {
  const apiResponse = await axios.post(url, body);
  const tokenN = apiResponse.data.token;
  return await axios
    .get(path, { headers: { Authorization: `Bearer ${tokenN}` } })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};

getUser("https://burger-queenn.herokuapp.com/users").then((r) =>
  console.log(r)
);




export const getProducts = async (path) => {
  const apiResponse = await axios.post(url, body);
  const tokenN = apiResponse.data.token;
  return await axios
    .get(path, { headers: { Authorization: `Bearer ${tokenN}` } })
    .then((data) => {
     // console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};




/*getProducts("https://burger-queenn.herokuapp.com/Products").then((r) =>
  console.log(r)
);*/
