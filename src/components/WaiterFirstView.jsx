import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'
import ChefSVG from '../img/chef.svg'
import WaiterNav from './WaiterNav';
import { products } from '../mocks'
import { useState, Fragment } from 'react';


const WaiterFirstView = () => {

  const [userOrder, setuserOrder] = useState('[]');


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
            {products.map(product => <ProductBox image={ChefSVG} title={product.description} price={product.price} />)}

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