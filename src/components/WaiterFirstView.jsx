import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'
import WaiterNav from './WaiterNav';
import { apiRequestToGetProducts } from '../Authentication/auth'
import { Fragment, useEffect, useState } from 'react';

const WaiterFirstView = () => {

  let urlProducts = "https://burger-queenn.herokuapp.com/products";

  const [products, setProducts] = useState([]); /* all products */
  const [filterProduct, setFilterProduct] = useState([]);
  const [option, setOption] = useState('Breakfast');

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    if (products.length) {
      const filterBreak = products.filter((prod) => prod.type === "Breakfast");
      setFilterProduct(filterBreak);
    }
  }, [products])

  /* useEffect debe ejecutarse de manera sincrona */

  const getProducts = async () => {
    const response = await apiRequestToGetProducts(urlProducts)
    setProducts(response.data)
  };

  const handleSelectedOption = (option) => {
    setOption(option)
    const filterBreak = products.filter((prod) => prod.type === "Breakfast");
    if (option === "Breakfast") {
      setFilterProduct(filterBreak);

    } else if (option === 'Lunch') {
      const filterLunch = products.filter((prod) => prod.type !== "Breakfast");
      setFilterProduct(filterLunch);
    }
  }

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

            <Button type={'secondary'} name={"BREAKFAST"} onClick={() => handleSelectedOption('Breakfast')} />
            <Button type={'tertiary'} name={"LUNCH"} onClick={() => handleSelectedOption('Lunch')} />


          </div >

          <BoxSelectItems >
            {
              (option === " ") ?
                filterProduct.map(product => <ProductBox product={product} />) :

                filterProduct.map(product => <ProductBox product={product} />)
            }
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