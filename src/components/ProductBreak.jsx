

import ProductBox from './ProductBox';
import { useState, useEffect } from 'react';

//filter


const ProductBreak = (products) => {

    const [coffee, setCoffee] = useState([]);
    const [sandwichs, setSandwichs] = useState([]);
    const [juices, setJuices] = useState([]);

    useEffect(() => {
        setCoffee(products.product.filter((prod) => prod.type === "Coffee"));
        setSandwichs(products.product.filter((prod) => prod.type === "Sandwichs"));
        setJuices(products.product.filter((prod) => prod.type === "Juices"));

    }, [])


    return (
        <div className="flex flex-col text-xl text-center">

            <p> Coffee</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {coffee.map(product => <ProductBox product={product} />)}

            </div>
            <div>

                <p> Sandwichs</p>

            </div>

            <div className=" grid grid-cols-2 grid-rows-1">
                {sandwichs.map(product => <ProductBox product={product} />)}

            </div>

            <p> Juices</p>

            <div className=" grid grid-cols-2 grid-rows-1">
                {juices.map(product => <ProductBox product={product} />)}

            </div>

        </div>

    )
}



export default ProductBreak
    ;