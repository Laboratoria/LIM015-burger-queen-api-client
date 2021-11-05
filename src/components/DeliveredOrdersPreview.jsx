import React, { Fragment } from 'react';
import WaiterNav from './WaiterView/WaiterNav';
import ListOfDeliveredOrders from './ListOfDeliveredOrders';


const DeliveredOrdersPreview = () => {

    return (
        <Fragment>
            <WaiterNav />

            <div className='bg-white-200 shadow mt-10 rounded-2xl p-4 ml-10 mx-8 justify-center flex flex-column text-center'>

                <div className='flex flex-row justify-center mb-4 mt-2'>
                    <span className='hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50'>COMPLETED</span><span className='text-teal-500 px-14'>|</span><span className='hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50'>DELIVERED</span>
                </div>

                <table className='border-collapse border border-green-800'>
                    <tr>
                        <th className='border border-green-600'>ORDERS N°</th>
                        <th className=' border border-green-600'>CUSTOMER</th>
                        <th className=' border border-green-600'>TIME AND DATE</th>
                        <th className='border-green-600'>STATUS</th>
                    </tr>
                    <ListOfDeliveredOrders />
                    <ListOfDeliveredOrders />
                    <ListOfDeliveredOrders />
                    <ListOfDeliveredOrders />
                </table>
            </div>
        </Fragment>
    )

}
export default DeliveredOrdersPreview;