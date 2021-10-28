import Button from "./Button";
import iconAdd from "../img/iconAdd.svg";
import { apiRequestToGetProducts } from "../Authentication/auth"
import iconNegative from "../img/iconNegative.svg";
//import iconDelete from "../img/iconDelete.svg";

const OrderPreview = (data) => {

  return (
    data.orders.map((dat) => (

      <div className="md: flex flex-col  items-center text-lg " key={dat.id}>
        <div className=" grid grid-rows-2 grid-flow-col gap-2">
          <div className="p-2 mt-2 text-blue-400" > order: {dat.order}</div>
          <div className="p-2 mt-2"> waiter: {dat.waiter}</div>
          <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> Time Order : {dat.timeOrder}</div>

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

          <tbody className=" text-center">
            {dat.products.map((list) => (
              <tr key={list.id}>
                <td>{list.product} </td>
                <td>
                  <img className="" src={iconNegative} alt={""} />{" "}
                </td>
                <td>{list.amount} </td>
                <td className="items-end">
                  <img src={iconAdd} alt={""} />{" "}
                </td>
                <td>{list.price} </td>
                <td >
                  <img className="text-left" src={iconAdd} alt={""} />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form action="">
          <textarea className="bg-amber-100  p-1 my-2 text-lg" value='Notes:'></textarea>
        </form>
        <div className=" p-6">{dat.total}</div>

        <div className="flex flex-row">
          <Button type={'secondary'} name={'CANCEL'} />
          <Button type={'secondary'} name={'SEND TO KITCHEN'} />
        </div>

      </div>


    ))

  );
};

export default OrderPreview;
