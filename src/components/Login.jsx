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
      [e.target.name]: e.target.value
    })
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    //verificacion del ruteo según sus opciones 

    console.log(datos.email + datos.password);
    window.open("/waiter", "_self");
  }



  return (
    <div className="App bg-scroll bg-cover h-screen flex px-4 sm:px-0 mx-auto">

      <section className="sm:mx-auto my-auto bg-gray-900 bg-opacity-60 shadow-xl rounded-3xl py-4">

        <div className="cangreburgertitle">
          <h1>Welcome to
            Cangre Burger</h1>
        </div>

        <div className="login__options">
          <h2 className='enter_as '> ENTER AS:</h2>
          <div className='characters--wrapper'>

            <div>
              <img className="characters--image" src={admi} alt="logo" />
              <p className="text--options"> ADMI</p>
            </div>

            <div className="calamardo">
              <img className="characters--image" src={waiter} alt="logo" />
              <p className="text--options"> WAITER</p>
            </div>

            <div>
              <img className="characters--image" src={chef} alt="logo" />
              <p className="text--options"> CHEF</p>
            </div>

          </div>
        </div>

        <form onSubmit={enviarDatos} className="text-center">
          <div>
            <input className='input input--email'
              type={"text"}
              placeholder={"Email"}
              name={"email"}
              onChange={handInputChange}
              required
            />
          </div>

          <div>
            <input className='input input--password'
              type="password"
              placeholder="Password"
              name="password"
              onChange={handInputChange}
              required
            />
          </div>

          <div>
            <button className='input button--login' type="submit"> LOG IN </button>
          </div>
        </form>
      </section>

    </div>
  );
};
export default Login;
