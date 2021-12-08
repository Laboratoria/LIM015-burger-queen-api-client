/* eslint-disable react-hooks/exhaustive-deps */
import ProductBox from './ProductBox';
import { useState, useEffect } from 'react'

const MenuItems = ({ products, productType, selectedProduct, setSelectedProduct,setVSumTotal,vSumTotal }) => {

    const [categoryOneProducts, setCategoryOneProducts] = useState([]);
    const [categoryTwoProducts, setCategoryTwoProducts] = useState([]);
    const [categoryThreeProducts, setCategoryThreeProducts] = useState([]);

    useEffect(() => {
        setCategoryOneProducts(products.filter((prod) => prod.type === productType[0]));
        setCategoryTwoProducts(products.filter((prod) => prod.type === productType[1]));
        setCategoryThreeProducts(products.filter((prod) => prod.type === productType[2]));
        /*se ejecuta 1 vez despues del renderizado y segun el array de dependencias 
         se ejecuta cada vez que esta cambie */

    }, [productType])

    return (

        <div className="flex flex-col text-xl text-center justify-center px-4 ">

            <p className="py-4 pl-4 font-bold  tracking-widest text-center  "> {productType[0]}</p>

            <div className="flex flex-wrap ">
                {categoryOneProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        setVSumTotal={setVSumTotal}
                        vSumTotal={vSumTotal}

                    />)}

            </div>
            <div>

                <p className="py-4 pl-4 font-bold  tracking-widest text-center "> {productType[1]}</p>

            </div>

            <div className="flex flex-wrap ">
                {categoryTwoProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        setVSumTotal={setVSumTotal}
                        vSumTotal={vSumTotal}
                    />)}

            </div>

            <p className="py-4 pl-4 font-bold tracking-widest text-center "> {productType[2]}</p>

            <div className=" flex  flex-wrap">
                {categoryThreeProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        setVSumTotal={setVSumTotal}
                        vSumTotal={vSumTotal}
                    />)}

            </div>
        </div>



    )


}

export default MenuItems;



