import Button from './Button';
const ListOfCompletedOrders = () => {
    return (
        <tr>
            <td className='border border-green-600 px-12'>ORDER N°1 </td>
            <td className='border border-green-600 px-12'>RACHEL </td>
            <td className='border border-green-600 px-10'>13/10/2021 11:20 AM</td>
            <td className='border border-green-600 px-10'><Button type={'primary'} name={'COMPLETED'} /> </td>
        </tr>

    )
}
export default ListOfCompletedOrders;