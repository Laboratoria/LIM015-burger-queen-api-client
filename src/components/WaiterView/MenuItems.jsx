import ProductBox from './ProductBox';
import { useState, useEffect } from 'react'

const MenuItems = ({ products, productType, selectedProduct, setSelectedProduct }) => {

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

        <div className="grid text-xl text-center items center">

            <p className="py-4 pl-12 font-normal tracking-widest items center"> {productType[0]}</p>

            <div className="grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {categoryOneProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}

                    />)}

            </div>
            <div>

                <p className="py-4 pl-14 font-normal tracking-widest"> {productType[1]}</p>

            </div>

            <div className=" grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {categoryTwoProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />)}

            </div>

            <p className="py-4 pl-14 font-normal tracking-widest"> {productType[2]}</p>

            <div className=" grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {categoryThreeProducts.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />)}

            </div>
        </div>



    )


}

export default MenuItems;



