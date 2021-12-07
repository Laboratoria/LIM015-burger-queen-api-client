import Button from "../Button";

import OrderPreview from "../WaiterView/OrderPreview";
import { getDataApi } from "../../Authentication/auth";
import { Fragment, useEffect, useState } from "react";
import MenuItems from "./MenuItems";

import NavOpcion from "./Nav";

import burgerimg from "../../img/burgerimg.svg";
import waiter from "../../img/waiter.svg";

//import ProductBreak from './ProductBreak'

const WaiterFirstView = () => {
  const urlProducts = "https://burger-queenn.herokuapp.com/products";
  const [products, setProducts] = useState([]); /* all products */

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [option, setOption] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getDataApi(urlProducts);
    setProducts(response.data);
  };

 

// add 
const [vSumTotal, setVSumTotal] = useState(0);


  return (
    <Fragment>
      <NavOpcion
        imgOption={waiter}
        option={"WAITER"}
        linkOption={"/waiter"}
        imgHome={burgerimg}
        home={"ORDERS"}
        linkHome={"/completed"}
      />

      <div className="grid grid-cols-2 h-80">
        <div className=" flex mx-8 mt-8 col-span-2">
          <Button
            type={"secondary"}
            name={"BREAKFAST"}
            onClick={() => setOption(true)}
          />
          <Button
            type={"secondary"}
            name={"LUNCH"}
            onClick={() => setOption(false)}
          />
        </div>

        <div>
          <div className="bg-white-200 shadow flex flew-row gap-x-16 mt-10 rounded-2xl p-2 mx-6 ">
            {products.length > 0 &&
              (option ? (
                <MenuItems
                  products={products}
                  selectedProduct={selectedProduct}
                  vSumTotal={vSumTotal}
                  setVSumTotal={setVSumTotal}
                  setSelectedProduct={setSelectedProduct}
                  productType={["Coffee", "Sandwichs", "Juices"]}
                />
              ) : (
                <MenuItems
                  products={products}
                  setVSumTotal={setVSumTotal}
                  vSumTotal={vSumTotal}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  productType={["Lunch", "Accompaniments", "Drinks"]}
                />
              ))}
          </div>
        </div>

        <div>
          {/* lista de ordenes */}
          <div className="bg-white-200 shadow  rounded-2xl px-4  px-8 items-center justify-center mt-10 rounded-2xl p-2 mx-6">
            <div></div>
            <OrderPreview
              selectedProduct={selectedProduct}
              vSumTotal={vSumTotal}
              setVSumTotal={setVSumTotal}
              setSelectedProduct={setSelectedProduct}
            />
            <div>
              <Button />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default WaiterFirstView;
