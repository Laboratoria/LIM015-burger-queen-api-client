import React from "react";
import NavOpcion from "../WaiterView/Nav";
import admi from "../../img/admi.svg";
import AdmiUser from "./AdmiUser";
import AdmiProduct from "./AdmiProduct";


import { useState, Fragment } from "react";


const Tabs = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap mx-4">
        <div className="w-full mx-4">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-1 flex-row"
            role="tablist"
          >
            <li className=" mt-6 flex-auto text-center">
              <a
                className={
                  " font-bold uppercase  shadow-lg  rounded-full py-2 px-1  block mx-2 " +
                  (openTab === 1
                    ? "text-black  text-lg bg-lime-300 "
                    : "text-white text-lg bg-teal-500 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                USERS
              </a>
            </li>
            <li className=" mt-6 flex-auto text-center">
              <a
                className={
                  " font-bold uppercase  shadow-lg  rounded-full py-2 px-1  block   mx-2 " +
                  (openTab === 2
                    ? "text-black  text-lg bg-lime-300 "
                    : "text-white text-lg bg-teal-500 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                PRODUCTS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            </li>

          </ul>
          <div className=" min-w-0 break-words justify-start  ">
            <div className=" ml-0">
              <div className=" justify-start  flex flex-row">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <AdmiUser />


                  </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                  <AdmiProduct/>
                 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Admi = () => {

  return (

    <Fragment>
      <NavOpcion imgOption={admi} option="ADMI"  linkOption={"/admin"}/>

      <div>
        <Tabs  />
      </div>

    </Fragment>


  );
}

export default Admi;