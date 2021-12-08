import CartOrder from "../WaiterView/CartOrder";
import Button from "../Button";
import { useState } from "react";
import { petitionPostAdd } from "../../Authentication/auth";

const OrderPreview = ({ selectedProduct, setSelectedProduct,setVSumTotal,vSumTotal}) => {
  //console.log( customerName);
  //console.log(selectedProduct);
  const employeeName = localStorage.getItem("namelogged");

  const [order, SetOrders] = useState({
    userId: employeeName ? employeeName : "sin nombre",
    products: [],
  });

  const [customerName, setCustomerName] = useState("");

  const createOrder = async () => {
    SetOrders({
      ...order,
      client: customerName ? customerName : "cliente",
      products: selectedProduct
        ? selectedProduct.map((el) => {
            var rObj = {};
            rObj.productId = el._id;
            rObj.qty = el.qty;
            return rObj;
          })
        : [],
    });

    console.log(order);
    const url = "https://burger-queenn.herokuapp.com/orders";

    await petitionPostAdd(url, order).then((response) =>
      console.log(response.data)
    );
  };

  const handleIncreaseProduct = (id) => {
    const newProduct = selectedProduct.filter((product) => product._id === id);
    if (newProduct[0].qty >= 1) {
      const newSelectedProducts = selectedProduct.map((product) => {
        if (product._id === id) product.qty++;
        product.priceNew = product.qty * product.price;
        setVSumTotal(vSumTotal+ product.priceNew);
        product.productId = product._id;
        
        return product;
      });
      setSelectedProduct(newSelectedProducts);
    }
    

  };

  const handleDecreaseProduct = (id) => {
    const newProduct = selectedProduct.filter((product) => product._id === id);
    if (newProduct[0].qty > 1) {

      const newProducts = selectedProduct.map((product) => {
        if (product._id === id) product.qty--;
        product.priceNew = product.qty * product.price;
        
        product.productId = product._id;
        return product;
      });
      setSelectedProduct(newProducts);
    }
   

  };

  const handleDeleteProduct = (id) => {
    const newProduct = selectedProduct.filter((product) => product._id === id);
    if (newProduct[0].qty === 1) {
      const newProducts = selectedProduct.filter(
        (product) => product._id !== id
      );
      setSelectedProduct(newProducts);
    }
  };


  


  return (
    <div className="md: flex flex-col  items-center text-lg ">
      
        <div className="">
          <div className="pt-4 flex justify-center items-center text-2xl">
            <p className="text-center ">CUSTOMER NAME: {}</p>
            <input
              className="border rounded-lg	border-gray-900	 w-44 h-9 ml-2"
              onChange={(e) => setCustomerName(e.target.value)}
              type={"text"}
              placeholder={"Insert Name"}
            />
          </div>

          <div className="p-2 mt-2 text-center "> Waiter:{employeeName && employeeName}</div>
        </div>
      

      <table>
        <thead>
          <tr className=" text-center">
            <th className=" ">
              PRODUCT
              <span className="text-teal-500 pl-8">|</span>
            </th>
            <th>
              AMOUNT
              <span className="text-teal-500 pl-8">|</span>
            </th>
            <th className="">PRICE</th>
          </tr>
        </thead>

        <CartOrder
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          handleDeleteProduct={handleDeleteProduct}
          handleIncreaseProduct={handleIncreaseProduct}
          handleDecreaseProduct={handleDecreaseProduct}
         
        />
      </table>

    
      <div className=" p-6"> Total: $ {vSumTotal}</div>

      <div className="flex flex-row">
        <Button type={"secondary"} name={"CANCEL"} />
        <Button
          type={"secondary"}
          name={"SEND TO KITCHEN"}
          onClick={() => createOrder()}
        />
      </div>
    </div>
  );
};

export default OrderPreview;
