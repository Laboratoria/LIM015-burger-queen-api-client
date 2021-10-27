import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'
import { getUserEmail, loginAuth } from "../Authentication/auth";
import admi from '../img/admi.svg';
import chef from '../img/chef.svg';
import waiter from '../img/waiter.svg';

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [option, setOption] = useState('');

  const [redirect, setRedirect] = useState(false);

  const [error, setError] = useState('');

  const [datauser, setDatauser] = useState({});

  useEffect(() => {
    const isUserMatch = (datauser.email === form.email) && form.password;

    if (datauser.email) {
      if (isUserMatch && option === 'admin' && datauser.roles.admin) {
        setRedirect(true);
      } else if (isUserMatch && option === 'waiter' && !datauser.roles.admin && datauser.roles.name === "waiter") {
        setRedirect(true);
      } else if (isUserMatch && option === 'chef' && !datauser.roles.admin && datauser.roles.name === "chef") {
        setRedirect(true);
      } else {
        setError(true);
      }
    }
  }, [datauser]);

  const handleSelectOption = (event) => {
    setOption(event.target.value);
  }

  const handInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const sendForm = async (e) => {
    e.preventDefault();
    if (form.email && form.password && option) {
      try {
        await loginAuth({ email: form.email, password: form.password })

        const response = await getUserEmail(form.email)
        setDatauser(response) // actualizacion de un estado es async

      } catch (error) {
        setError(error.message)
      }
    } else {
      setError('Please, complete all fields , selection the  correct options  and correct credentials');
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
                  <input type='radio' name={'role'} value={'admin'} onClick={handleSelectOption} />
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
                <p className='text-red-500 text-sm text-lg pb-2'>{error}</p>
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