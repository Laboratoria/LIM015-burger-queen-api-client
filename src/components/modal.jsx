import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { petitionPostAdd, petitionDelete, petitionPutEdit } from "../Authentication/auth";


const ModalAddUser = ({
  getUsers,
  showModal,
  setShowModal,
  modalEdit,
  setModalEdit,
  userSele,
  modalDelete,
  setModalDelete,
}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [formEdit, setFormEdit] = useState(form);

  const [error, setError] = useState("");

  const [isAdmin, setisAdmin] = useState(false);



  const saveChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
      roles: {
        admin: isAdmin,
        name: e.target.name === "roles" ? e.target.value : "",
      },
    });
  };



  const saveChangeEdit = (e) => {
    e.preventDefault();
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
      roles: {
        admin: isAdmin,
        name: e.target.name === "roles" ? e.target.value : "",
      },
    });
  };



  useEffect(() => {
    deleteUserId();
  }, []);

  const deleteUserId = async (id) => {
    const urlUser = "https://burger-queenn.herokuapp.com/users/"
    console.log(id);
    await petitionDelete(urlUser, id);
    setModalDelete(false)
    await getUsers();
  }


  useEffect(() => {
    deleteUserId();

  }, []);

  useEffect(() => {
    sendFormEdit();

  }, []);

  const sendFormEdit = async (id) => {

    const urlUser = "https://burger-queenn.herokuapp.com/users/"
    console.log(id);
    await petitionPutEdit(urlUser, id, formEdit);
    setModalDelete(false)
    await getUsers();
  }



  const sendForm = async (e) => {
    e.preventDefault();
    //console.log(form);
    const urlUser = "https://burger-queenn.herokuapp.com/users";
    await petitionPostAdd(urlUser, form);
    await getUsers();
    // console.log("hackerrang");
  };

  return (
    <Fragment>
      <div>
        {showModal ? (
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
                        setShowModal(false);
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
                            setisAdmin(!isAdmin);
                          }}
                        />{" "}
                        is admin
                      </label>
                    </div>

                    {error ? (
                      <div>
                        <p className="text-red-500 text-sm text-lg pb-2">
                          {error}
                        </p>
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
                          e.preventDefault();
                          setShowModal(false);
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
        ) : (
          ""
        )}
      </div>

      <div>
        {modalEdit ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">EDIT USER</h3>

                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalEdit(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                  {/*body*/}
                  <form onSubmit={() => sendFormEdit(userSele._id)} className="text-center">
                    <div>
                      <input
                        className="input input--email"
                        type="text"
                        placeholder="Add Name"
                        name={"name"}
                        onChange={saveChangeEdit}
                        value={userSele && userSele.name}
                        required
                      />
                    </div>

                    <div>
                      <input
                        className="input input--email"
                        type="text"
                        placeholder="Add Email"
                        name={"email"}
                        onChange={saveChangeEdit}
                        value={userSele && userSele.email}
                        required
                      />
                    </div>

                    <div>
                      <input
                        className="input input--password"
                        type="password"
                        placeholder=" add Password"
                        name={"password"}
                        onChange={saveChangeEdit}
                        value={userSele && userSele.password}
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="input input--password"
                        type="text"
                        placeholder="roles : chef , admi or waiter "
                        name={"roles"}
                        onChange={saveChangeEdit}
                        value={userSele && userSele.roles.name}
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
                            setisAdmin(!isAdmin);
                          }}
                        />{" "}
                        is admin
                      </label>
                    </div>

                    {error ? (
                      <div>
                        <p className="text-red-500 text-sm text-lg pb-2">
                          {error}
                        </p>
                      </div>
                    ) : null}

                    <div></div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: bg-teal-500 shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type={"submit"}
                      >
                        SAVE EDIT
                      </button>

                      <button
                        className=" bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: shadow-lg outline-none focus: bg-teal-500  outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type={"submit"}
                        onClick={(e) => {
                          e.preventDefault();
                          setModalEdit(false);
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
        ) : (
          " "
        )}
      </div>

      <div>
        {modalDelete ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">DELETE USER</h3>

                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalDelete(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                  <div className=" flex justify-center items-center  ">

                    DO YOU WANT TO DELETE THE USER: {userSele && userSele.name} ?

                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: bg-teal-500 shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type={"submit"}
                      onClick={(e) => {
                        e.preventDefault();
                        deleteUserId(userSele && userSele._id);
                      }}
                    >
                      YES
                    </button>

                    <button
                      className=" bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base hover: shadow-lg outline-none focus: bg-teal-500  outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type={"submit"}
                      onClick={(e) => {
                        e.preventDefault();
                        setModalDelete(false);
                      }}
                    >
                      NO
                    </button>
                  </div>
                </div>

                <div className="relative p-6 flex-auto"></div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : (
          " "
        )}
      </div>
    </Fragment>
  );
};

export default ModalAddUser;
