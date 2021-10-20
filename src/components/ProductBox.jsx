import PropTypes from 'prop-types';


const ProductBox = ({ image, title, price, handleClick }) => {
    return (

        <div className='bg-gray-200 rounded-2xl w-28 h-28 box-border shadow-xl m-3' onClick={handleClick}>
            <img className='' src={''} alt={''} />
            <p className=''>{title}</p>
            <p className=''>{price}</p>
        </div>

    )
}

ProductBox.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default ProductBox;