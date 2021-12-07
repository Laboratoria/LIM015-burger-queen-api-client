import Button from './Button';
const ListOfCompletedOrders = ({order}) => {
    return (
        
        <tr key={order._id}>
            
            <td className='border border-green-600 px-12'>ORDER N°1:{ } </td>
            <td className='border border-green-600 px-12'>{order.client} </td>
            <td className='border border-green-600 px-10'>{order.dateEntry}</td>

            <td className='border border-green-600 px-10'>
                {(order.status==="pending")?
                (
                <Button type={'primary'} name={'PENDING'} /> 
                ): 
                <Button type={'primary'} name={'COMPLETE'} />
                }
                </td>
        </tr>
    )
}
export default ListOfCompletedOrders;