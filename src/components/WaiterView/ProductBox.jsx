//import PropTypes from 'prop-types';

// import { array } from "prop-types";

const ProductBox = ({ products, product, selectedProduct, setSelectedProduct }) => {
    const { image, name, price, _id } = product;

    const filterId = (id) => {
        const prodFilter = products.filter((product) => product._id === id);
        //si ya existe en el array
        if (selectedProduct.some((product) => product._id === id)) {
            const newSelectedProducts = selectedProduct.map(product => {
                if (product._id === id) product.qty++
                return product;
            })
            setSelectedProduct(newSelectedProducts)
        } else {
            setSelectedProduct([...selectedProduct, ...prodFilter])
        }
    }

    return (
        <div className='bg-gray-100 rounded-2xl w-44 h-44 box-border shadow-xl m-2' key={_id}>
            <div onClick={() => filterId(_id)}>
                <div className='flex flex-col items-center py-3'>
                    <img className='h-24 w-24 ' src={image} alt={name} />
                    <p className='text-sm'>{name}</p>
                    <p className='text-sm'>${price}</p>
                </div>
            </div>
        </div >
    )
}


// ProductBox.propTypes = {
//     image: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     handleClick: PropTypes.func,
// };

export default ProductBox;