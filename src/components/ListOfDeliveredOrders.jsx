import Button from './Button';
const ListOfDeliveredOrders = () => {
    return (
        <tr>
            <td className='border border-green-600 p-4'>ORDER N°1 </td>
            <td className='border border-green-600 p-4'>RACHEL </td>
            <td className='border border-green-600 p-4'>13/10/2021 11:20 AM</td>
            <td className='border border-green-600 p-4'> <Button type={'secondary'} name={'DELIVERED'} /> </td>
        </tr>

    )
}
export default ListOfDeliveredOrders;