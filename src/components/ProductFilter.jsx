
import ProductBox from './ProductBox';
import { useState, useEffect } from 'react';

//filter

const ProductFilter = (products) => {
    const [productLunch, setproductLunch] = useState([]);
    const [accompaniments, setAccompaniments] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        setproductLunch(products.product.filter((prod) => prod.type === "Lunch"));
        setAccompaniments(products.product.filter((prod) => prod.type === "Accompaniments"));
        setDrinks(products.product.filter((prod) => prod.type === "Drinks"));

        console.log(productLunch, accompaniments, drinks);
    }, [])

    return (
        <div className="flex flex-col text-xl text-center">

            <p> Hamburgers</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {productLunch.map(product => <ProductBox product={product} />)}

            </div>
            <div>

                <p> Accompaniments</p>

            </div>

            <div className=" grid grid-cols-2 grid-rows-1">
                {accompaniments.map(product => <ProductBox product={product} />)}

            </div>

            <p> Drinks</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {drinks.map(product => <ProductBox product={product} />)}

            </div>


        </div>



    )

}



export default ProductFilter;



