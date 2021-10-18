import React, { Fragment } from 'react';
import logoutbtn from '../img/logoutbtn.svg';
const ProductBox = () => {
    return (
        <Fragment>
            <div className='bg-gray-200 rounded-2xl w-28 h-28 box-border shadow-xl pt-3 grid-rows-2'>
                <img className='justify-items-center' src={logoutbtn} alt={''} />
                <p className='place-self-center'>Coffee</p>
                <p className='justify-center'>$5.00</p>
            </div>
        </Fragment>

    )
}
export default ProductBox;