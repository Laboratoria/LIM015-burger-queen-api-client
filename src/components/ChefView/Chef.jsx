import Nav from "../WaiterView/Nav";
import chef from "../../img/chef.svg";

import { useState, useEffect } from "react";
import { getDataApi } from "../../Authentication/auth";
import OrderDescription from "../ChefView/OrderDescription";


const Chef = () => {

  const [openTab, setOpenTab] = useState(1);

  const [dataOrders, setDataOrders] = useState([]);

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
    <div>
      <div>
        <Nav imgOption={chef} option="CHEF" />
      </div>

      <div className="flex flex-row justify-center mb-8 mt-6">
        <li className="outline-none list-none">
          <a 
            className={
              "hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 " +
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
            PENDING
          </a>
        </li>
        <span className="text-teal-500 px-4 text-lg ">|</span>
        <li className="outline-none list-none">
          <a
            className={
              "hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 " +
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
            COMPLETED
          </a>
        </li>
      </div>


      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <div className="bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8  px-80 justify-center flex flex-column text-center ">
        
        {
        (dataOrders.length>0)?(
            dataOrders.map((order) => 
                      <OrderDescription order={order}/>
        )):" "}


        </div>
      </div>

      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
      <div className="bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8  px-80 justify-center flex flex-column text-center ">

        COMPLETED

        </div>
      </div>

    </div>





  );
};
export default Chef;
