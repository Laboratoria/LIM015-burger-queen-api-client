import Button from "./Button";
import iconAdd from "../img/iconAdd.svg";
import { apiRequestToGetProducts } from "../Authentication/auth"
import iconNegative from "../img/iconNegative.svg";
import iconDelete from "../img/iconDelete.svg";
import { useState } from "react/cjs/react.development";
//import iconDelete from "../img/iconDelete.svg";



const CartOrder =({selectedProduct,setSelectedProduct})=>{

  console.log(selectedProduct);

return (
<tbody className=" tex-center">
            { selectedProduct.flat().map((list) => (
              <tr key={list._id}>
                <td>{list.name} </td>
                <td>
                  <img className="" src={iconNegative} alt={""} />{" "}
                </td>
                <td> { } </td>
                <td className="items-end">
                  <img src={iconAdd} alt={""} />{" "}
                </td>
                <td> {"$"}{list.price} </td>
                <td >
                  <img  src={iconDelete} alt={""} />{" "}
                </td>
              </tr>
            ))}
</tbody>

)}


const OrderPreview = ({selectedProduct,setSelectedProduct,customerName}) => {

  
  const employeeName = localStorage.getItem('namelogged');

  return (
  
      <div className="md: flex flex-col  items-center text-lg " >
        <div className=" grid grid-rows-2 grid-flow-col gap-2">
          <div className="p-2 mt-2 text-blue-400" > order: { }</div>
          <div className="p-2 mt-2"> waiter: {employeeName}</div>
          <div className="p-2 mt-2"> customerName: {customerName}</div>

          <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> Time Order : { }</div>

        </div>

        <table>
          <thead>
            <tr className=" text-center">
              <th className="w-1/2 ">PRODUCT</th>
              <th> <span className='text-teal-500 px-14'>|</span></th>
              <th className="">AMOUNT</th>
              <th> <span className='text-teal-500 px-14'>|</span></th>
              <th className="w-1/2">PRICE</th>
            </tr>
          </thead>

          <CartOrder  selectedProduct={selectedProduct}
                 setSelectedProduct={setSelectedProduct}/>
              
        </table>

        <form action="">
          <textarea className="bg-amber-100  p-1 my-2 text-lg" value='Notes:'></textarea>
        </form>
        <div className=" p-6"> total: { }</div>

        <div className="flex flex-row">
          <Button type={'secondary'} name={'CANCEL'} />
          <Button type={'secondary'} name={'SEND TO KITCHEN'} />
        </div>

      </div>

      );
};

export default OrderPreview;
