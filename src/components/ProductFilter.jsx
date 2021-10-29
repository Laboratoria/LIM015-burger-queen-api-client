
import ProductBox from './ProductBox';
import { useState } from 'react';

//filter


const ProductFilter = ({products,productType,selectedProduct,setSelectedProduct}) => {

 console.log(products);

    //const [selectedProduct,setSelectedProduct]=useState([]);
        
   
    /*
    const [productLunch,setproductLunch]=useState([]);
    const [accompaniments,setAccompaniments]=useState([]);
    const [drinks,setDrinks]=useState([]);*/
    

      const type0=products.filter((prod) => prod.type === productType[0]);
      const type1 =products.filter((prod) => prod.type === productType[1]);
      const type2=products.filter((prod) => prod.type === productType[2]);

  
    return (
        
        <div className="flex flex-col text-xl text-center">
    
            <p> {productType[0]}</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {type0.map(product => 
                <ProductBox
                key={product._id}
                products={products}
                 product={product} 
                 selectedProduct={selectedProduct}
                 setSelectedProduct={setSelectedProduct}
                   />)}

            </div>
            <div>

                <p> {productType[1]}</p>

            </div>

            <div className=" grid grid-cols-2 grid-rows-1">
                {type1.map(product => <ProductBox key={product._id}
                products={products}
                 product={product} 
                 selectedProduct={selectedProduct}
                 setSelectedProduct={setSelectedProduct} />)}

            </div>

            <p> {productType[2]}</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {type2.map(product => <ProductBox key={product._id}
                products={products}
                 product={product} 
                 selectedProduct={selectedProduct}
                 setSelectedProduct={setSelectedProduct} />)}

            </div>


        </div>



    )


}



export default ProductFilter;



