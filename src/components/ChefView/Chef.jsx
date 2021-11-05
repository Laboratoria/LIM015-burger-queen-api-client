// import Nav from "../WaiterView/Nav";
// import chef from "../../img/chef.svg";
// import { useState, useEffect } from "react";
// import { getDataApi } from "../../Authentication/auth";
import Nav from '../WaiterView/Nav'
import chef from '../../img/chef.svg';

import { useState, useEffect } from "react";
import OrderDescription from "../ChefView/OrderDescription";
import Options from "../ChefView/Options";
import { getAllOrders } from "../../Authentication/auth"

const Chef = () => {

    const [orderStatus, setOrderStatus] = useState('PENDING');
    const [allOrders, setAllOrders] = useState([]);

    const fetchOrders = async () => {
        const orders = await getAllOrders();
        setAllOrders(orders.data)
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    const handleOption = (status) => {
        setOrderStatus(status)
    }

    return (
        <div>
            <div>
                <Nav imgOption={chef} option='CHEF' />
            </div>

            <Options
                pending={'PENDING'}
                delivered={'DELIVERED'}
                handleOption={handleOption}
            />

            {orderStatus === 'PENDING' ? (
                <div className='grid grid-cols-2 gap-4'>

                    {allOrders.map(order => (
                        <OrderDescription {...order} />
                        // recibe como prop todo el objecto
                    ))}

                </div >

            ) : null
            }
            {orderStatus === 'DELIVERED' ? (
                <>
                    <h1>Test</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        {allOrders.map(order => (
                            <OrderDescription {...order} />
                            // recibe como prop todo el objecto
                        ))}
                    </div >
                </>
            ) : null}

        </div >



    )
}

export default Chef;
// const Chef = () => {

//     let orderUrl = "https://burger-queenn.herokuapp.com/orders"

//     const [openTab, setOpenTab] = useState(1);

//     const [dataOrders, setDataOrders] = useState([]);

//     const getData = async () => {
//         const data = await getDataApi(orderUrl);
//         //console.log(data.data);
//         setDataOrders(data.data);
//     };

//     useEffect(() => {
//         getData();
//     }, []);
//     console.log(dataOrders);


//     return (
//         <div>
//             <div>
//                 <Nav imgOption={chef} option="CHEF" />
//             </div>

//             <div className="flex flex-row justify-center mb-8 mt-6">
//                 <li className="outline-none list-none">
//                     <a
//                         className={
//                             "hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 " +
//                             (openTab === 1 ? "text-green-500 " : " ")
//                         }
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setOpenTab(1);
//                         }}
//                         data-toggle="tab"
//                         href="#link1"
//                         role="tablist"
//                     >
//                         PENDING
//                     </a>
//                 </li>
//                 <span className="text-teal-500 px-4 text-lg ">|</span>
//                 <li className="outline-none list-none">
//                     <a
//                         className={
//                             "hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 " +
//                             (openTab === 2 ? "text-green-500" : " ")
//                         }
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setOpenTab(2);
//                         }}
//                         data-toggle="tab"
//                         href="#link2"
//                         role="tablist"
//                     >
//                         COMPLETED
//                     </a>
//                 </li>
//             </div>


//             <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                 <div className="bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8  px-80 justify-center flex flex-column text-center ">

//                     {
//                         (dataOrders.length > 0) ? (
//                             dataOrders.map((order) =>
//                                 <OrderDescription order={order} />
//                             )) : " "}


//                 </div>
//             </div>

//             <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                 <div className="bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8  px-80 justify-center flex flex-column text-center ">

//                     COMPLETED

//                 </div>
//             </div>

//         </div>





//     );
// };
// export default Chef;
