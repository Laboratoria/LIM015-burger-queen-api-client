import React, { Fragment } from 'react';
import logoutbtn from '../img/logoutbtn.svg';
const ProductCard = () => {
    return (
        <Fragment>
            <div className='bg-gray-500 shadow-xl '>
                <img src={logoutbtn} alt={''} />
                <p>Coffee</p>
                <p>$5.00</p>
            </div>
        </Fragment>

    )
}
export default ProductCard;