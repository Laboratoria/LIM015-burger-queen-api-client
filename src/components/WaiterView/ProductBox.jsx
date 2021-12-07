//import PropTypes from 'prop-types';

// import { array } from "prop-types";

const ProductBox = ({ products, product, selectedProduct, setSelectedProduct , setVSumTotal,vSumTotal }) => {
    const { image, name, price, _id } = product;

    const filterId = (id) => {
        

        const prodFilter = products.filter((product) => product._id === id);

        //si ya existe en el array
        if (selectedProduct.some((product) => product._id === id)) {
            const newSelectedProducts = selectedProduct.map(product => {
                if (product._id === id) product.qty++;
                setVSumTotal(vSumTotal+(product.qty*product.price));

                return product;
            })
            setSelectedProduct(newSelectedProducts)
        } else {
            setSelectedProduct([...selectedProduct, ...prodFilter])
        }

        console.log(vSumTotal && vSumTotal);

        //const filterselection =selectedProduct.filter((product) => product._id === id);
         //console.log( (filterselection && ((filterselection[0].qty)*(filterselection[0].price))));
                
        let sumar =(prodFilter[0].qty)*(prodFilter[0].price);
        
         setVSumTotal(vSumTotal+ sumar);

    }

    return (
        <div className='bg-gray-100 rounded-2xl w-44 h-44 box-border shadow-xl mx-4 my-2 cursor-pointer hover:bg-lime-100 text-black focus:bg-lime-300 text-black' key={_id}>
            <div onClick={() => filterId(_id)} >
                <div className='flex flex-col items-center py-3'>
                    <img className='h-20 w-20' src={image} alt={name} />
                    <p className='text-sm'>{name}</p>
                    <p className='text-sm'>$ {price}</p>
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