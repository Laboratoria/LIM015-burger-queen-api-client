import React, { useState, useEffect } from 'react';
import { apiRequestToGetProducts } from "../Authentication/auth"
import Button from "./Button";
import OrderPreview from './OrderPreview';

const ListOrder = () => {

    const dataOrders = [
        {
            id: "1p",
            name: "Tania",
            image: " img1",
            type: "cofee",
            order: " N° 0001",
            timeOrder: "13/10/2021 13:00 PM",
            notes: " esta nota es para tania",
            waiter: "juan",
            total: "20$",
            products: [
                {
                    id: "produc1",
                    product: "produc1",
                    price: "1$",
                    amount: " Q1",
                },
                {
                    id: "produc2",
                    product: "produ2",
                    price: "2$",
                    amount: "Q2",
                },
                {
                    id: "produc3",
                    product: "produc3",
                    price: "3$",
                    amount: "Q3",
                },
                {
                    id: "produc4",
                    product: "produc3",
                    price: "3$",
                    amount: "Q4",
                }

            ],
        },
    ];

    const [orders, setOrders] = useState(dataOrders);

    const [product, setProduct] = useState([]);

    const url = "https://burger-queenn.herokuapp.com/Products"

    const productGet = async () => {
        const data = await apiRequestToGetProducts(url);
        setProduct(data.data);
        //console.log(product);
    }



    useEffect(() => {
        productGet();
    }, []);



    return (
        <div className="bg-white-200 shadow mt-20 rounded-2xl p-4 ml-10 mx-8">
            <div></div>
            <OrderPreview orders={orders} />
            <div>
                <Button />
                <Button />
            </div>
        </div>
    );
};


export default ListOrder;