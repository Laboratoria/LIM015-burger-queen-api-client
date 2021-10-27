import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
//import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'
import WaiterNav from './WaiterNav';
import { apiRequestToGetProducts } from '../Authentication/auth'
import { Fragment, useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductBreak from './ProductBreak'


const WaiterFirstView = () => {

  let urlProducts = "https://burger-queenn.herokuapp.com/products";

  const getProducts = async () => {
    const response = await apiRequestToGetProducts(urlProducts)
    setProducts(response.data)
  };

  useEffect(() => {
    getProducts();
    
  }, [ ])

  const [products, setProducts] = useState([]); /* all products */
 
  const [option, setOption] = useState(" ");
  
  useEffect(() => {
    if (products.length) {
      setProducts(products);

    }
  }, [products])

  /* useEffect debe ejecutarse de manera sincrona */



const handleSelectedOption = (option) => {
  setOption(option);
}

  console.log(option);
  console.log(products);

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

          <BoxSelectItems  >
    
            {
              (option ==="Lunch") ?

              <ProductFilter  product={products} />
                 : (option ==="Breakfast" )?

                 <ProductBreak  product={products}/>
                :""
              
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