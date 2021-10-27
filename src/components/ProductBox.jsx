import PropTypes from 'prop-types';





const ProductBox = ({ product, handleClick,}) => {

    const { image, name, price, id } = product;

    return (

        <div className='bg-gray-100 rounded-2xl w-30 h-40 box-border shadow-xl m-2' key={id} onClick={handleClick}>
            <div className='flex flex-col items-center py-3'>
                <img className='h-20 w-20 ' src={image} alt={name} />
                <p className='text-sm'>{name}</p>
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