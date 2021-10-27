import Button from './Button'
import BoxSelectItems from './BoxSelectItems';
import ProductBox from './ProductBox';
import OrderPreview from './OrderPreview'
import CustomerName from './CustomerName'
import WaiterNav from './WaiterNav';
import {getProducts} from '../Authentication/auth';
import { Fragment, useEffect, useState } from 'react';


// import { products } from '../mocks'

//import axios from 'axios';



const WaiterFirstView = () => {

  const [products, setProducts] = useState([]);

  const filterBreak=products.filter((prod) => prod.type==="Breakfast");

  const [filterProduct,setfilterProduct]=useState(filterBreak);

  const [option, setOption] = useState('');

  useEffect(() => {
    getProd();
    
  }, [])


useEffect( ()=>{
  optionSelection();
},[])


  /* useEffect debe ejecutarse de manera sincrona */

  let urlProducts = "https://burger-queenn.herokuapp.com/products";


  const getProd = async () => {
     const response =await getProducts(urlProducts)
     console.log(response.data, 'dataproducts');
     setProducts(response.data)
  };



  const optionSelection = ( opcion)=>{
    setOption(opcion);

    if(opcion==="Breakfast"){
      
      const filterBreakfast=products.filter((prod) => prod.type===opcion);
      console.log(filterBreakfast,"filtrado");
      console.log(option);
      console.log(opcion);
      setfilterProduct(filterBreakfast);
      
    } else if(opcion==='Lunch'){

      const filterLunch=products.filter((prod) => prod.type!=="Breakfast");
      console.log(filterLunch,"filtrado lucnh");
      console.log(option);
      console.log(opcion);
     setfilterProduct(filterLunch);
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
            
            <Button   type={'secondary'} name={"BREAKFAST"}  onClick={ () => optionSelection ('Breakfast')} /> 
            <Button  type={'tertiary'} name={"LUNCH"}  onClick={ () => optionSelection ('Lunch')} />

             
          </div >

          <BoxSelectItems >
          
          {    
          (option===" " ) ?
          filterProduct.map(product => <ProductBox key={product.id}   product={product} />) : 
          
          filterProduct.map(product => <ProductBox key={product.id}   product={product} />)
        
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