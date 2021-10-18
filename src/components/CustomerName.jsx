import React, { Fragment } from 'react';
const CustomerName = () => {
    return (
        <Fragment>
            <div className="flex">

                <p className="text-xs">CUSTOMER NAME :</p>

                <input className="text-xs" type={'text'} placeholder={'Insert Name'} />

            </div>

        </Fragment>
    )
}
export default CustomerName;