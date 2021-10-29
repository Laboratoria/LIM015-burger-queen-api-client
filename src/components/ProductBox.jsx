import PropTypes from 'prop-types';
//import {  useEffect,useState} from 'react';
//import { apiRequestToGetProducts } from '../Authentication/auth'


const ProductBox = ({products,product,selectedProduct,setSelectedProduct}) => {

    const { image, name, price, _id} = product;
    
    console.log(products);

const filterId= (id)=>{
    console.log(id);
    const prodFilter =products.filter( (ele)=>ele._id===id);
    setSelectedProduct([...selectedProduct,prodFilter]);
    
}

    return (
        <div className='bg-gray-100 rounded-2xl w-40 h-40 box-border shadow-xl m-2' key={_id}>
            <button type="button" onClick={()=> filterId(_id)}>
            <div className='flex flex-col items-center py-3'>
                <img className='h-20 w-20 ' src={image} alt={name} />
                <p className='text-sm'>{name}</p>
                <p className='text-sm'>{`$${price}`}</p>
            </div>  
            </button>
        </div >
    )
}


ProductBox.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default ProductBox;