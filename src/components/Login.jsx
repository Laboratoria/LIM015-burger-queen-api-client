import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import admi from '../img/admi.svg';
import chef from '../img/chef.svg';
import waiter from '../img/waiter.svg';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [option, setOption] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);



  const handleSelectOption = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  }

  const handInputChange = (e) => {
    //console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (data.email && data.password && option) {
      setRedirect(true);
    } else {
      setError(true)
    }
  }

  return (
    redirect ? (
      <Redirect to={`/${option}`} />
    ) : (
      <div className="App bg-scroll bg-cover h-screen flex px-4 sm:px-0 mx-auto" >

        <section className="sm:mx-auto my-auto bg-gray-900 bg-opacity-60 shadow-xl rounded-3xl py-4">

          <div className="cangreburgertitle">
            <h1>Welcome to
              Cangre Burger</h1>
          </div>

          <div className="login__options">
            <h2 className='enter_as '> ENTER AS:</h2>
            <div className='characters--wrapper'>

              <div className='flex flex-col'>
                <img className="characters--image" src={admi} alt="logo" />
                <div className='flex flex-row items-center gap-2 pl-4'>
                  <input type='radio' name={'role'} value={'admi'} onClick={handleSelectOption} />
                  <p className="text--options"> ADMI</p>
                </div>
              </div>

              <div className='flex flex-col' >
                <img className='characters--image' src={waiter} alt="logo" />
                <div className='flex flex-row items-center gap-2 pl-'>
                  <input type='radio' name={'role'} value={'waiter'} onClick={handleSelectOption} />
                  <p className='text--options'> WAITER</p>
                </div>
              </div>

              <div className='flex flex-col'>
                <img className="characters--image" src={chef} alt="logo" />
                <div className='flex flex-row items-center gap-2 px-4'>
                  <input type='radio' name={'role'} value={'chef'} onClick={handleSelectOption} />
                  <p className="text--options"> CHEF</p>
                </div>

              </div>

            </div>
          </div>

          <form onSubmit={sendForm} className="text-center">
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
            {error ? (
              <div>
                <p className='text-red-500 text-sm text-lg'>Please, complete all fields</p>
              </div>
            ) : null}


            <div>
              <button className='input button--login' type={'submit'}> LOG IN </button>
            </div>
          </form>
        </section>

      </div >)

  )

};

export default Login;
