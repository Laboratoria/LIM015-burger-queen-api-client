import React, { Fragment } from 'react';
import logoutbtn from '../img/logoutbtn.svg';

const ProductBox = () => {
    return (
        <Fragment>
            <div className='bg-gray-200 rounded-2xl w-28 h-28 box-border shadow-xl m-3'>
                <img className='' src={logoutbtn} alt={''} />
                <p className=''>Coffee</p>
                <p className=''>$5.00</p>
            </div>
        </Fragment>
    )
}
export default ProductBox;