import Button from "./Button";
import BoxSelectItems from "./BoxSelectItems";
//import ProductBox from './ProductBox';

import OrderPreview from './OrderPreview'

import WaiterNav from './WaiterNav';
import { apiRequestToGetProducts } from '../Authentication/auth'
import { Fragment, useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
//import ProductBreak from './ProductBreak'



const WaiterFirstView = () => {
  let urlProducts = "https://burger-queenn.herokuapp.com/products";
  const [products, setProducts] = useState([]); /* all products */

  const [customerName, setCustomerName] = useState('');

  const [selectedProduct,setSelectedProduct]=useState([]);

  const [option, setOption] = useState(true);


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await apiRequestToGetProducts(urlProducts);
    setProducts(response.data);
  };

  
  return (
    <Fragment>
      <WaiterNav />

      <div className="grid grid-cols-2 h-80">
        <div className="col-span-2 flex flex-row justify-between mx-8">
          <div className="w-full">
            <Button type={"primary"} name={"VIEW ORDER"} />
          </div>

          <div className="w-full">
            <div className="pt-16 flex justify-center items-center text-2xl">
              <p className="">CUSTOMER NAME: { }</p>
              <input className="border rounded-lg	border-gray-900	 w-44 h-9 ml-2" onChange={(e) => setCustomerName(e.target.value)} type={'text'} placeholder={'Insert Name'} />
            </div>
          </div>
        </div>

        <div>
          <div className="mx-8">
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

          <BoxSelectItems>
            {products.length > 0 && 
              (option ? (
                <ProductFilter  products={products} selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct} productType={["Coffee","Sandwichs","Juices"]}
                />
              ) : (
                <ProductFilter products={products}  selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct} productType={["Lunch","Accompaniments","Drinks"]} />
              ))}

          </BoxSelectItems>
        </div>

        <div>

        {/* lista de ordenes */}
        <div className="bg-white-200 shadow mt-20 rounded-2xl p-4 ml-10 mx-8">
            <div></div>
            <OrderPreview selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}  customerName={customerName}  />
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
