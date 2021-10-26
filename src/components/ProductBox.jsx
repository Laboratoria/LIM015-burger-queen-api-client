import PropTypes from 'prop-types';
//filter


const ProductBox = ({ product, handleClick }) => {
    const { image, name, price ,id } = product;

    return (

        <div className='bg-gray-100 rounded-2xl w-28 h-28 box-border shadow-xl m-3' onClick={handleClick}>
            <div className='flex flex-col items-center py-3' key ={id} >
                <img className='h-16 w-16 ' src={image} alt={name} />
                <p className='text-sm '>{name}</p>
                <p className=''>{`$${price}`}</p>
            </div>
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