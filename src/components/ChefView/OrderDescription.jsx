import Button from '../Button'

const OrderDescription = (order) => {

  const employeeName = localStorage.getItem('namelogged');
  let date = new Date(order.dateEntry)
  let settingDateFormat = date.toDateString()

  return (
    <div className='bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8 mb-32  px-80 justify-center flex flex-column text-center '>
      <div className=" grid grid-rows-2 grid-flow-col gap-2">
        <div className="p-2 mt-2" > ORDER N°: {order._id}</div>
        <div className="p-2 mt-2"> WAITER:{employeeName.toUpperCase()}</div>
        <div className="p-2 mt-2"> CUSTOMER NAME: {order.client.toUpperCase()}</div>
        <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> TIME ORDER: {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</div>

      </div>
      <table className='border-collapse border border-green-800 mt-10 '>

        <thead>

          <tr>
            <th className='border py-2.5'>TOTAL</th>
            {order ? order.products.map(product =>
              <th className=' border border-green-600'>{product.qty}</th>
            ) : null}
          </tr>

        </thead>
        <tbody>
          <tr>
            <td className='border border-green-600 py-3'>{'ITEMS'}</td>
            {order ? order.products.map(product =>
              < td className='border border-green-600' >
                <img src={product.image} alt={product.name} />
              </td >
            ) : null}
          </tr>

          <tr>
            <td className='border-green-600 py-3'>{'STATUS'}</td>
            {order.status ? (
              <td className='border border-green-600'>{order.status.toUpperCase()}</td>
            ) : null}
          </tr>

        </tbody>
      </table>
      <div className='flex flex-row items-center justify-end '>
        <div class dName="mr-20">
          <span className="font-medium tracking-wide">TOTAL ITEMS:<span className="px-4">{8}</span> </span>
          <Button type={'quaternary'} name={'PENDING'} />
        </div>
      </div>
    </div >
  )
}
export default OrderDescription;
