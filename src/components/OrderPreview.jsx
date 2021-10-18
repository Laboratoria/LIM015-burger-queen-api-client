import React, { Fragment } from 'react';
import Button from './Button'
const OrderPreview = () => {
    return (
        <Fragment>
            <div>
                <p>ORDER N0001</p>
                <p>WAITER: JUAN</p>
            </div>

            <div>
                <p>TIME ORDER : 13/10/21 13:00PM</p>
                {/* <p></p> */}
            </div>

            <div>
                <p>PRODUCT</p>
                <p>ITEMS</p>
                <p>PRICE</p>
            </div>

            <textarea>Notes:</textarea>

            <div>
                <p>TOTAL $59</p>
            </div>
            <Button />
            <Button />


        </Fragment>
    )
}
export default OrderPreview;