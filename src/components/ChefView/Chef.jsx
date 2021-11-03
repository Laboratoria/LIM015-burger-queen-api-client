import Nav from "../WaiterView/Nav";
import chef from "../../img/chef.svg";
import TotalTable from "../ChefView/TotalTable";
import ItemsTable from "./ItemsTable";
import StatusOrder from "./StatusOrder";
import Button from "../Button";
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
            PENDING
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
    )):" nada"}


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
