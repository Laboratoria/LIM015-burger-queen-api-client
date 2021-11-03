import React, { useState, useEffect} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { petitionPostAdd,petitionDelete,petitionPutEdit} from "../../Authentication/auth";


const ModalProduct = ({
  getProducts,
  showModal,
  setShowModal,
  modalEdit,
  setModalEdit,
  userSele,
  modalDelete,
  setModalDelete,
}) => {
  const [form, setForm] = useState({
    
  });

  const [formEdit,setFormEdit]=useState(form);

  const [error, setError] = useState("");
  const [num, setNum] = useState(0);
  const [qty, setQty] = useState(0);


  const[nameEdit,setNameEdit]=useState(userSele.name);
  const[priceEdit,setPriceEdit]=useState(userSele.price);
  const[qtyEdit,setQtyEdit]=useState(userSele.qty);
  const[imageEdit,setImageEdit]=useState(userSele.image);
  const[typeEdit,setTypeEdit]=useState(userSele.name);


 //add new product  
  const saveChange = (e) => {
    e.preventDefault();
    
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      price:Number(num),
      qty:Number(qty)
        
    });
  };
  const sendForm = async (e) => {
    console.log(num);
      e.preventDefault();
    console.log(form);
    const urlUser = "https://burger-queenn.herokuapp.com/products";
    await petitionPostAdd(urlUser, form);
    await getProducts();
    setShowModal(false)
    // console.log("hackerrang");
  };



  //delete products 
  
  useEffect(() => {
    deleteProductId();
  }, []);

const deleteProductId = async(id) =>{
  const url="https://burger-queenn.herokuapp.com/products/"
  console.log(id); 
  await petitionDelete(url,id);
  setModalDelete(false)
  await getProducts();
}


// adit products 
useEffect(() => {
  sendFormEdit();
  
}, []);

const sendFormEdit= async(id) =>{
 
  setFormEdit({
    ...formEdit,
    name:nameEdit,
    price:priceEdit,
    qty:qtyEdit,
    image:imageEdit,
    type:typeEdit,

  });
  console.log(formEdit);

  const urlUser="https://burger-queenn.herokuapp.com/products/"
  console.log(id); 
  await petitionPutEdit(urlUser,id,formEdit);
  //setModalDelete(false)
  await getProducts();
}



  

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
                    <h3 className="text-3xl font-semibold">CREATE PRODUCT</h3>

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
                        placeholder="Add Name of product"
                        name={"name"}
                        onChange={saveChange}
                        required
                      />
                    </div>

                    <div>
                      <input
                      
                      type="number"
                      min={0}
                      max={1000}
                      value={num}
                      onChange={e => setNum(e.target.value)}
                      className="input input--email"
                      placeholder="Add price"
                      name={"price"}
                      required
                      />
                    </div>

                    <div>
                      <input
                        className="input input--email"
                        type="number"
                        min={0}
                        max={1000}
                        value={qty}
                        placeholder="Add stock "
                        name={"qty"}
                        onChange={e => setQty(e.target.value)}
                        required
                      />
                    </div>



                    <div>
                      <input
                        className="input input--password"
                        type="text"
                        placeholder=" add url of image"
                        name={"image"}
                        onChange={saveChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="input input--password"
                        type="text"
                        placeholder=" add type: Lunch, Accompaniments, Drinks, Coffee , Sandwichs , Juices"
                        name={"type"}
                        onChange={saveChange}
                        required
                      />
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
                    <h3 className="text-3xl font-semibold">EDIT PRODUCT</h3>

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
                  <form onSubmit={()=> sendFormEdit(userSele._id)} className="text-center">
                   
                  <div>
                      <input
                        className="input input--email"
                        type="text"
                        placeholder="Add Name of product"
                        name={"name"}
                        value={nameEdit}
                        onChange={(e)=>{
                          e.preventDefault();
                          setNameEdit(e.target.value);
                          }}
                        required
                      />
                    </div>

                    <div>
                      <input
                      
                      type="number"
                      min={0}
                      max={1000}
                      className="input input--email"
                      placeholder="Add price"
                      name={"price"}
                      value={priceEdit}
                        onChange={(e)=>{
                          e.preventDefault();
                          setPriceEdit(e.target.value);
                         }}
                      required
                      />
                    </div>

                    <div>
                      <input
                        className="input input--email"
                        type="number"
                        min={0}
                        max={1000}
                        value={qtyEdit}
                        onChange={(e)=>{
                          e.preventDefault();
                        setQtyEdit(e.target.value);
                        }}
                        placeholder="Add stock "
                        name={"qty"}
                        required
                      />
                    </div>



                    <div>
                      <input
                        className="input input--password"
                        type="text"
                        placeholder=" add url of image"
                        name={"image"}
                        value={imageEdit}
                        onChange={(e)=>{
                          e.preventDefault();
                          setImageEdit(e.target.value);
                         }}
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="input input--password"
                        type="text"
                        placeholder=" add type: Lunch, Accompaniments, Drinks, Coffee , Sandwichs , Juices"
                        name={"type"}
                        value={typeEdit}
                        onChange={(e)=>{
                          e.preventDefault();
                          setTypeEdit(e.target.value);
                         }}
                        required
                      />
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
        </div> */

      <div>
        {modalDelete ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">DELETE PRODUCT</h3>

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
                        deleteProductId(userSele && userSele._id);
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

export default ModalProduct;
