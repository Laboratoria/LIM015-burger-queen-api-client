import React from "react";
import NavOpcion from "../WaiterView/Nav";
import admi from "../../img/admi.svg";
import AdmiUser from "./AdmiUser";
import AdmiProduct from "./AdmiProduct";


import { useState, Fragment } from "react";


const Tabs = ({ color }) => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap mx-4">
        <div className="w-full mx-4">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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

          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
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
        <Tabs color="teal" />
      </div>

    </Fragment>


  );
}

export default Admi;