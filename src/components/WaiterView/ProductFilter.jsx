import ProductBox from './ProductBox';

const ProductFilter = ({ products, productType, selectedProduct, setSelectedProduct }) => {

    const productOne = products.filter((prod) => prod.type === productType[0]);
    const productTwo = products.filter((prod) => prod.type === productType[1]);
    const productThree = products.filter((prod) => prod.type === productType[2]);

    return (

        <div className="grid text-xl text-center items center">

            <p className="py-4 pl-12 font-normal tracking-widest items center"> {productType[0]}</p>

            <div className="grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {productOne.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}

                    />)}

            </div>
            <div>

                <p className="py-4 pl-14 font-normal tracking-widest"> {productType[1]}</p>

            </div>

            <div className=" grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {productTwo.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />)}

            </div>

            <p className="py-4 pl-14 font-normal tracking-widest"> {productType[2]}</p>

            <div className=" grid grid-cols-2 grid-rows-1 items center gap-x-16 pl-28">
                {productThree.map(product =>
                    <ProductBox
                        key={product._id}
                        products={products}
                        product={product}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />)}

            </div>
        </div>



    )


}

export default ProductFilter;



