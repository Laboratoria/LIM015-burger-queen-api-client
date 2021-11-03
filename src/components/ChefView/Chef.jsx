
import Nav from '../WaiterView/Nav'
import chef from '../../img/chef.svg';
import TotalTable from '../ChefView/TotalTable'
import ItemsTable from './ItemsTable';
import StatusOrder from './StatusOrder';
import Button from '../Button'

const Chef = () => {

    // const employeeName = localStorage.getItem('namelogged');

    return (
        <div>
            <div>
                <Nav imgOption={chef} option='CHEF' />
            </div>

            <div className='flex flex-row justify-center mb-4 mt-2 py-4'>
                <span className='hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50'>PENDING</span><span className='text-teal-500 px-14'>|</span><span className='hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50'>COMPLETED</span>
            </div>

            <div className='bg-white-200 shadow rounded-2xl p-4 ml-10 mx-8  px-80 justify-center flex flex-column text-center '>

                <table className='border-collapse border border-green-800 mt-10 '>

                    <thead>
                        <tr>
                            <th className='border py-2.5'>TOTAL</th>
                            <TotalTable />
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='border border-green-600 py-3'>{'ITEMS'}</td>
                            <ItemsTable />
                        </tr>

                        <tr>
                            <td className='border-green-600 py-3'>{'STATUS'}</td>
                            <StatusOrder />
                        </tr>

                    </tbody>
                </table>


                <div className="flex flex-row gap-4 items-center ml-96 pt-10">
                    <span className="font-medium tracking-wide"> NOTES: </span>
                    <textarea className="bg-amber-100 p-1 my-2 text-lg w-96 h-36"></textarea>
                </div>
                <div className='flex flex-row items-center justify-end '>
                    <div className="mr-20">
                        <span className="font-medium tracking-wide">TOTAL ITEMS:<span className="px-4">{8}</span> </span>
                        <Button type={'quaternary'} name={'PENDING'} />
                    </div>
                </div>

            </div >



        </div >

    )
}
export default Chef;