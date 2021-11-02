import React, { useEffect, useState, Fragment } from "react";
import iconNegative from "../img/iconNegative.svg";
import iconAddUser from "../img/iconAddUser.svg";
import {apiRequestToGetProducts } from "../Authentication/auth";
import ModalProduct from "./ModalProduct";



const PAdmiProducts = ({products,getProducts}) => {
  
  const [showModal, setShowModal] = useState(false);
  const [modalEdit ,setModalEdit]=useState(false);
  const [modalDelete ,setModalDelete]=useState(false);
  
  const [userSele,setUserSele]=useState([]);  

  const userSelection =(user,option)=>{
    setUserSele(user);
    (option==="edit")?setModalEdit(true):setModalDelete(true)
  }

  
  return (

    <Fragment>

     <div>
     {showModal ? ( 
      < ModalProduct 
      getUsers={getProducts} 
      showModal={showModal} 
      setShowModal={setShowModal}  />
     ) : ""}
     </div>
  

    <div>
     { modalEdit?(
     < ModalProduct 
      getUsers={getProducts} 
      modalEdit={modalEdit} 
      setModalEdit={setModalEdit}
      userSele={userSele}
      />
     ):" "
      }
    </div>

    <div>
      {modalDelete?(
        < ModalProduct
        getUsers={getProducts} 
        modalDelete={modalDelete} 
        setModalDelete={setModalDelete}
        userSele={userSele}
        />
       ):" "
      }
    </div>


      <table className="divide-y divide-blue-300  bg-white-200 shadow mt-2 rounded-2xl  ml-10 mx-4 p-4  ">
        <thead>
          <tr className=" bg-emerald-200  p-4">
            <th className="flex flex-row  gap-2 px-8 ">
              <button onClick={() => setShowModal(true)}>
                {" "}
                <img className="" src={iconAddUser} alt={""} />
              </button>
              PRODUCT
            </th>
            <th className=" px-4 ">CHARGE</th>
            <th className="px-4 ">Actions</th>
          </tr>
        </thead>
        <tbody className=" ">
          {products.length > 0 ? (
            products.map((user) => (
              <tr key={user.id}>
                <td className=" px-4"> {user.email}</td>
                {user.roles.name ? <td>{user.roles.name}</td> : <td>admin</td>}
                <td className="flex flex-row  gap-2 justify-center  ">
                  <div>
                    {" "}
                    <button 
                    onClick={() => userSelection(user,"edit")}> 
                    <img className="" src={iconNegative} alt={""} /> EDIT {" "}
                    </button>
                  </div>
                  <div>
                    {" "}
                    <button onClick={() => userSelection(user,"delete")}> 
                      <img className="" src={iconNegative} alt={""} />DELETE{" "} 
                      </button>
                    
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}> No USERS</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};



const AdmiProduct= () => {
  const baseUrl = "https://burger-queenn.herokuapp.com/products";

  const [products, setProducts] = useState([]);

  const petitionGet = async () => {
    const data = await apiRequestToGetProducts(baseUrl);
    setProducts(data.data);
 
  };

  useEffect(() => {
    petitionGet();
  }, []);
  console.log(products);

  return (
    <Fragment>
               
        <div className="flex-row flex justify-center">
          <PAdmiProducts products={products}  getProducts={petitionGet} />
        </div>
        </Fragment>
  );
};

export default AdmiProduct;
