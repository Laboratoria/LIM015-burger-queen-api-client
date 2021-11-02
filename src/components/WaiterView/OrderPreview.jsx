import CartOrder from '../WaiterView/CartOrder';
import Button from '../Button'

const OrderPreview = ({ selectedProduct, setSelectedProduct, customerName }) => {

    const employeeName = localStorage.getItem('namelogged');

    const handleIncreaseProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty >= 1) {
            const newSelectedProducts = selectedProduct.map(product => {
                if (product._id === id) product.qty++
                return product;
            })
            setSelectedProduct(newSelectedProducts)
        }
    }

    const handleDecreaseProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty > 1) {
            const newProducts = selectedProduct.map(product => {
                if (product._id === id) product.qty--
                return product;
            })
            setSelectedProduct(newProducts);
        }

    }

    const handleDeleteProduct = (id) => {
        const newProduct = selectedProduct.filter(product => product._id === id);
        if (newProduct[0].qty === 1) {
            const newProducts = selectedProduct.filter(product => product._id !== id)
            setSelectedProduct(newProducts);
        }
    }


    return (

        <div className="md: flex flex-col  items-center text-lg " >
            <div className=" grid grid-rows-2 grid-flow-col gap-2">
                <div className="p-2 mt-2 text-blue-400" > Order: { }</div>
                <div className="p-2 mt-2"> Waiter:{employeeName}</div>
                <div className="p-2 mt-2"> Customer Name: {customerName}</div>

                <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> Time Order : { }</div>

            </div>

            <table>
                <thead>
                    <tr className=" text-center">
                        <th className="w-1/2 ">PRODUCT</th>
                        <th> <span className='text-teal-500 px-14'>|</span></th>
                        <th>AMOUNT</th>
                        <th> <span className='text-teal-500 px-14'>|</span></th>
                        <th className="w-1/2">PRICE</th>
                    </tr>
                </thead>

                <CartOrder
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleIncreaseProduct={handleIncreaseProduct}
                    handleDecreaseProduct={handleDecreaseProduct}
                />

            </table>

            <form action="">
                <textarea className="bg-amber-100 p-1 my-2 text-lg"></textarea>
            </form>
            <div className=" p-6"> Total:{ }</div>

            <div className="flex flex-row">
                <Button type={'secondary'} name={'CANCEL'} />
                <Button type={'secondary'} name={'SEND TO KITCHEN'} />
            </div>

        </div>

    );
};

export default OrderPreview;
