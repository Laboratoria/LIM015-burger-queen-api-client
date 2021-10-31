import React, { useState } from "react";
import { addNewUser } from "../Authentication/auth";



const ModalAddUser = ({ getUsers }) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showMod, setShowMod] = useState(true);

  const [error, setError] = useState("");

  const [isAdmin, setisAdmin] = useState(false);

  const saveChange = (e) => {
    e.preventDefault();
    console.log("capture");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      roles: {
        admin: isAdmin,
        name: e.target.name === "roles" ? e.target.value : "",
      },
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    //console.log(form);
    const urlUser = "https://burger-queenn.herokuapp.com/users";
    await addNewUser(urlUser, form);
    await getUsers();
    // console.log("hackerrang");
  };


  return (

    <div>
      {showMod ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">CREATE USER</h3>

                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMod(false)
                    }}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={sendForm} className="text-center">
                  <div>
                    <input
                      className="input input--email"
                      type="text"
                      placeholder="Add Name"
                      name={"name"}
                      onChange={saveChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      className="input input--email"
                      type="text"
                      placeholder="Add Email"
                      name={"email"}
                      onChange={saveChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      className="input input--password"
                      type="password"
                      placeholder=" add Password"
                      name={"password"}
                      onChange={saveChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input input--password"
                      type="text"
                      placeholder="roles : chef , admi or waiter "
                      name={"roles"}
                      onChange={saveChange}
                      required
                    />
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="admin"
                        defaultChecked={isAdmin}
                        onChange={(e) => {
                          e.preventDefault();
                          setisAdmin(!isAdmin)
                        }}
                      />{" "}
                      is admin
                    </label>
                  </div>

                  {error ? (
                    <div>
                      <p className="text-red-500 text-sm text-lg pb-2">{error}</p>
                    </div>
                  ) : null}

                  <div></div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: bg-teal-500 shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type={"submit"}
                    >
                      SAVE
                    </button>

                    <button
                      className=" bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: shadow-lg outline-none focus: bg-teal-500  outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type={"submit"}
                      onClick={(e) => {
                        e.preventDefault(); setShowMod(false)
                      }}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>

                <div className="relative p-6 flex-auto"></div>

                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : ""}

    </div>
  );

};

export default ModalAddUser;