import NavOpcion from "./WaiterView/Nav";
import waiter from "../img/waiter.svg";
import burgerimg from "../img/burgerimg.svg";

import React, { Fragment } from "react";
import ListOfCompletedOrders from "./ListOfCompletedOrders";
import { getDataApi } from "../Authentication/auth";
//import PreviewCompletedOrders from './PreviewCompletedOrders';
import { useState, useEffect } from "react";

const PreviewCompletedOrders = () => {
  const [dataOrders, setDataOrders] = useState([]);

  const [openTab, setOpenTab] = useState(1);

  const getData = async () => {
    const data = await getDataApi("https://burger-queenn.herokuapp.com/orders");
    //console.log(data.data);
    setDataOrders(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataOrders);

  return (
    <Fragment>
      <NavOpcion
        imgHome={burgerimg}
        home="ORDERS"
        imgOption={waiter}
        option="ADMI"
      />

      <div className="flex flex-row justify-center mb-4 mt-2 py-4 list-none max-w-md mx-auto">
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 1 ? "text-green-500 " : " ")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            COMPLETED
          </a>
        </li>

        <span className="text-teal-500 px-4 text-4xl ">|</span>

        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 2 ? "text-green-500" : " ")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            DELEVERED
          </a>
        </li>
      </div>

      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <div className="bg-white-200 shadow mt-10 rounded-2xl p-4 ml-10 mx-8 justify-center flex flex-column text-center">
          
          <table className="border-collapse border border-green-800">
            <tr>
              <th className="border border-green-600">ORDERS N°</th>
              <th className=" border border-green-600">CUSTOMER</th>
              <th className=" border border-green-600">TIME AND DATE</th>
              <th className="border-green-600">STATUS</th>
            </tr>
            {dataOrders.length > 0
              ? dataOrders.map((order) => (
                  <ListOfCompletedOrders order={order} />
                ))
              : " "}
          </table>
        </div>
      </div>

      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        DELIVERED
        
      </div>
    </Fragment>
  );
};
export default PreviewCompletedOrders;
