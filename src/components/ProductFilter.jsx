

import ProductBox from './ProductBox';
import Button from './Button';
import { useState ,useEffect } from 'react';

//filter


const ProductFilter = ( products) => {

    
    const [productLunch,setproductLunch]=useState([]);
    const [accompaniments,setAccompaniments]=useState([]);
    const [drinks,setDrinks]=useState([]);
    
    useEffect(() => {
    setproductLunch( products.product.filter((prod) => prod.type === "Lunch"));
    setAccompaniments( products.product.filter((prod) => prod.type === "Accompaniments"));
    setDrinks( products.product.filter((prod) => prod.type === "Drinks"));

    console.log(productLunch, accompaniments, drinks);
    },[])


    return (
        <div>
            <div>
                {  productLunch.map(product => <ProductBox product={product} />)}
          
            </div>
          <Button type={'tertiary'} name={"ACCOMPANIMENTS"} onClick={() => console.log()} />    

           <div>
           {  accompaniments.map(product => <ProductBox product={product} />)}

           </div>


           <Button type={'tertiary'} name={"DRINKS"} onClick={() => console.log()} /> 

           {  drinks.map(product => <ProductBox product={product} />)}

        </div>


       
    )
}



export default ProductFilter;