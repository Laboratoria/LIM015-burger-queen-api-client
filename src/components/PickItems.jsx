import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';

const PickItems = () => {
  return (
    <div className="flex flex-row h-80">
      <div>
        <div>
          <Button type={'primary'} name={'VIEW ORDER'} />
        </div>
        <div>
          <Button type={'secondary'} name={'BREAKFAST'} />
          <Button type={'tertiary'} name={'LUNCH'} />

          <BoxSelectItems>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </BoxSelectItems>
        </div>


        {/* <CustomerName /> */}



      </div >
      <div>
        <h1>Hola</h1>
      </div>
    </div>
  )
}
export default PickItems;