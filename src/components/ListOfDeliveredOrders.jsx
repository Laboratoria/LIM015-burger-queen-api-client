import Button from './Button';
const ListOfDeliveredOrders = () => {
    return (
        <tr>
            <td className='border border-green-600 p-4'>{ }</td>
            <td className='border border-green-600 p-4'>{ }</td>
            <td className='border border-green-600 p-4'>{ }</td>
            <td className='border border-green-600 p-4'> <Button type={'secondary'} name={'DELIVERED'} /> </td>
        </tr>

    )
}
export default ListOfDeliveredOrders;