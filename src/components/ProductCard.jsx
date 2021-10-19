import React, { useState } from 'react';

import logoutbtn from '../img/logoutbtn.svg';


const ItemProducts = (dataProducts) => {


    return (
        <div className="flex justify-between " >

            {dataProducts.data.map((product) => (

                <div className="bg-gray-200 rounded-lg p-2 m-1 w-1/5 m-w-xs h-50%" key={product.id}>
                    <img src={product.img} alt={''} />
                    <div className="mx-2.5">
                        {product.product}
                    </div>

                    <div>
                        {product.price}
                    </div>

                </div>)
            )
            }
        </div>

    )
}




const ProductCard = () => {

    const dataProducts = [
        { id: "p1", img: logoutbtn, product: 'american coffe', price: '$ 5.00' },
        { id: "p2", img: logoutbtn, product: 'coffe milks', price: '$ 5.00' },
        { id: "p3", img: logoutbtn, product: 'ham', price: '$ 10.00' },
        { id: "p4", img: logoutbtn, product: 'ham', price: '$ 10.00' }
    ]

    const [products, setProducts] = useState(dataProducts);



    return (

        <div className="grid grid-cols-2 gap-2'">
            <div >
                <h1 className="text-center my-4 text-3xl md:text-lg font-bold "> Coffee</h1>

                <ItemProducts data={products} />

            </div>
        </div>

    )

}



export default ProductCard;