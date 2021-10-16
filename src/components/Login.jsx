import React, { Fragment, useState } from "react";
import admi from '../img/admi.svg';
import chef from '../img/chef.svg';
import waiter from '../img/waiter.svg';



const Login = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });


  const handInputChange = (e) => {
    //console.log(e.target.value);
    setDatos({
        ...datos,
        [e.target.name]:e.target.value
    })
  };

  const enviarDatos=(e) => {
     e.preventDefault();
     //verificacion del ruteo según sus opciones 

     console.log(datos.email + datos.password);
     window.open("/waiter", "_self");
  }



  return (
    <Fragment>
      <section className="containerlogin  ">
        <h1>Welcome to Cangre Burger</h1>
       <div className="optionEnterAS">

           <h2> ENTER AS:</h2>
            <div>
             <div> <img src={admi} className="App-logo" alt="logo" /> 
             <p> ADMI</p>
             </div>
             <div> <img src={waiter} className="App-logo" alt="logo" />
             <p> WAITER</p>
              </div>
             <div><img src={chef} className="App-logo" alt="logo" />
             <p> CHEF</p>
             </div>

            </div>
       </div>

        <form  onSubmit={enviarDatos}>
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={handInputChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handInputChange}
              required
            />
          </div>

          <div>
            <button type="submit"> LOGIN IN </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};
export default Login;
