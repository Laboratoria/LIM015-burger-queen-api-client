import CartOrder from '../WaiterView/CartOrder';
import Button from '../Button'
import { useState, useEffect } from 'react';
import { petitionPostAdd } from "../../Authentication/auth";

const OrderPreview = ({ selectedProduct, setSelectedProduct, customerName }) => {

    //console.log( customerName);
    //console.log(selectedProduct);
    const employeeName = localStorage.getItem('namelogged');


    const [order, SetOrders] = useState({
        userId: (employeeName) ? employeeName : "sin nombre",
        products: []
    });



    const createOrder = async () => {
        SetOrders({
            ...order,
            client: customerName ? customerName : "cliente",
            products: selectedProduct ? selectedProduct.map((el) => {
                var rObj = {};
                rObj.productId = el._id;
                rObj.qty = el.qty;
                return rObj;

            }) : []
        })

        console.log(order);
        const url = "https://burger-queenn.herokuapp.com/orders";

        await petitionPostAdd(url, order).then(response =>
            console.log(response.data));
    }



    const handleIncreaseProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty >= 1) {
            const newSelectedProducts = selectedProduct.map(product => {
                if (product._id === id) product.qty++;
                product.priceNew = (product.qty * product.price);
                product.productId = product._id;
                return product;
            })
            setSelectedProduct(newSelectedProducts)
        }
    }


    const handleDecreaseProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty > 1) {
            const newProducts = selectedProduct.map(product => {
                if (product._id === id)
                    product.qty--;
                product.priceNew = (product.qty * product.price);
                product.productId = product._id;
                return product;
            })
            setSelectedProduct(newProducts);
        }
    }

    const handleDeleteProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty === 1) {
            const newProducts = selectedProduct.filter(product => product._id !== id)
            setSelectedProduct(newProducts);
        }
    }



    const [vSumTotal, setVSumTotal] = useState(0);

    useEffect(() => {
        const handlesumar = () => {
            const sumar = selectedProduct.map((prod) => parseFloat(prod.priceNew))
                .reduce((previous, current) => {
                    return previous + current;
                }, 0);
            setVSumTotal(sumar);

        };

        handlesumar();
    });



    return (

        <div className="md: flex flex-col  items-center text-lg " >
            <div className=" grid grid-rows-2 grid-flow-col gap-1">
                <div className="p-2 mt-2 text-blue-400" > Order: { }</div>

                <div className="p-2 mt-2"> Waiter:{employeeName}

                </div>
                <div className="p-2 mt-2"> Customer Name:{customerName}</div>
            </div>

            <table>
                <thead>
                    <tr className=" text-center">
                        <th className="w-1/2 ">PRODUCT
                            <span className='text-teal-500 px-14'>|</span>
                        </th>
                        <th>AMOUNT
                            <span className='text-teal-500 px-14'>|</span>
                        </th>
                        <th className="w-1/2">PRICE</th>
                    </tr>
                </thead>

                <CartOrder
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleIncreaseProduct={handleIncreaseProduct}
                    handleDecreaseProduct={handleDecreaseProduct}
                />

            </table>

            <form action="">
                <textarea className="bg-amber-100 p-1 my-2 text-lg"></textarea>
            </form>
            <div className=" p-6"> Total: ${vSumTotal}

            </div>

            <div className="flex flex-row">
                <Button type={'secondary'} name={'CANCEL'} />
                <Button type={'secondary'} name={'SEND TO KITCHEN'} onClick={() => createOrder()} />
            </div>

        </div>

    );
};

export default OrderPreview;
