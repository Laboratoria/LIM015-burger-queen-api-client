const OrderDescription = () => {

    const employeeName = localStorage.getItem('namelogged');
    const customerName = localStorage.getItem('')
    return (
        <div className=" grid grid-rows-2 grid-flow-col gap-2">
            <div className="p-2 mt-2 text-blue-400" > Order: { }</div>
            <div className="p-2 mt-2"> Waiter:{employeeName}</div>
            <div className="p-2 mt-2"> Customer Name: {customerName}</div>

            <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> Time Order : { }</div>

        </div>
    )
}
export default OrderDescription;