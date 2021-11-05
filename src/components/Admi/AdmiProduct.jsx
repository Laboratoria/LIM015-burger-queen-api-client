import React, { useEffect, useState, Fragment } from "react";

import iconAddUser from "../../img/iconAddUser.svg";
import { getDataApi } from "../../Authentication/auth";
import ModalProduct from "./ModalProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'



const PAdmiProducts = ({ products, getProducts }) => {

  console.log(products);


  const [showModal, setShowModal] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [productSele, setProductSele] = useState([]);

  const userSelection = (user, option) => {
    setProductSele(user);
    (option === "edit") ? setModalEdit(true) : setModalDelete(true)
  }



  return (

    <Fragment>

      <div>
        {showModal ? (
          < ModalProduct
            getProducts={getProducts}
            showModal={showModal}
            setShowModal={setShowModal} />
        ) : ""}
      </div>


      <div>
        {modalEdit ? (
          < ModalProduct
            getProducts={getProducts}
            modalEdit={modalEdit}
            setModalEdit={setModalEdit}
            productSele={productSele}
          />
        ) : " "
        }
      </div>


      <div>
        {modalDelete ? (
          < ModalProduct
            getProducts={getProducts}
            modalDelete={modalDelete}
            setModalDelete={setModalDelete}
            productSele={productSele}
          />
        ) : " "
        }
      </div>



      <table className="divide-y divide-blue-300  bg-white-200 shadow mt-2 rounded-2xl  ml-10 mx-4 p-4  ">
        <thead>
          <tr className=" bg-emerald-200  p-4">
            <th className="flex flex-row  gap-2 px-8 ">
              <button onClick={() => setShowModal(true)}>
                <img className="" src={iconAddUser} alt={""} />
              </button>
              PRODUCT
            </th>
            <th className="px-2 ">PHOTO</th>
            <th className="px-2 ">STOCK</th>
            <th className="px-2 ">PRICE</th>
            <th className="px-2 ">CATEGORY</th>
            <th className="px-4 "> </th>

          </tr>
        </thead>
        <tbody className=" ">
          {products.length > 0 ? (
            products.map((prod) => (
              <tr key={prod.id}>
                <td className=" px-4">{prod.name} </td>
                <td className=" px-4">
                  <img className="h-10 w-10 " src={prod.image} alt=" " />
                </td>
                <td className=" px-4">{prod.qty} </td>
                <td className=" px-4">{prod.price} </td>
                <td className=" px-4">{prod.type} </td>

                <td className="flex flex-row  gap-2 justify-center  ">
                  <div>
                    <FontAwesomeIcon className="cursor-pointer text-green-700" onClick={() => userSelection(prod, "edit")} icon={faEdit} />
                  </div>
                  <div>
                    <FontAwesomeIcon className="cursor-pointer text-pink-800" onClick={() => userSelection(prod, "delete")} icon={faTrashAlt} />
                  </div>
                </td>
              </tr>

            ))
          ) : (
            <tr>
              <td colSpan={3}> NO PRODUCTS </td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};





const AdmiProduct = () => {
  const baseUrl = "https://burger-queenn.herokuapp.com/products";

  const [products, setProducts] = useState([]);

  const petitionGet = async () => {
    const data = await getDataApi(baseUrl);
    setProducts(data.data);

  };

  useEffect(() => {
    petitionGet();
  }, []);


  return (
    <Fragment>

      <div className="flex-row flex justify-center">
        <PAdmiProducts products={products} getProducts={petitionGet} />
      </div>
    </Fragment>
  );
};

export default AdmiProduct;
