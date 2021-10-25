import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'
import WaiterNav from './WaiterNav';

// import { products } from '../mocks'
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const WaiterFirstView = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  /* useEffect debe ejecutarse de manera sincrona */

  let urlProducts = "https://burger-queenn.herokuapp.com/products";

  const token = localStorage.getItem("token");

  const getProducts = async () => {
    const concatUrl = `${urlProducts}`
    const response = await axios.get(concatUrl, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });

    //console.log(response.data, 'dataproducts');
    setProducts(response.data)
  };

  return (
    <Fragment>

      <WaiterNav />

      <div className="grid grid-cols-2 h-80">
        <div className="col-span-2 flex flex-row justify-between mx-8">
          <div className="w-full">
            <Button type={'primary'} name={'VIEW ORDER'} />
          </div>

          <div className="w-full">
            <CustomerName />
          </div>

        </div>

        <div>
          <div className="mx-8">
            <Button type={'secondary'} name={'BREAKFAST'} />
            <Button type={'tertiary'} name={'LUNCH'} />
          </div >


          <BoxSelectItems>
            {products.map(product => <ProductBox key={product.id} product={product} />)}
          </BoxSelectItems>
        </div>


        <div>
          <OrderPreview />
        </div>
      </div >
    </Fragment>
  )
}
export default WaiterFirstView;