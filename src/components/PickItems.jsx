import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'

const PickItems = () => {
  return (
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
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </BoxSelectItems>
      </div>


      <div>
        <OrderPreview />
      </div>
    </div >
  )
}
export default PickItems;