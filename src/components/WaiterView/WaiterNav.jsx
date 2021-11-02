import burgerimg from '../../img/burgerimg.svg'
import waiter from '../../img/waiter.svg'
import logoutbtn from '../../img/logoutbtn.svg'
import { Link } from 'react-router-dom'

const WaiterNav = () => {
    return (
        <nav>
            <div className="bg-gradient-to-r from-green-200 via-yellow-100 to-green-200 h-14 sm:h-20 flex justify-between items-center py-4" >
                <div className="flex items-center text-xs sm:text-lg sm:px-5">
                    <img className="px-2 h-15 sm:h-14" src={burgerimg} alt="burger icon" />
                    <strong className=''>ORDERS</strong>
                </div>

                <div className="flex items-center text-xs sm:text-lg">
                    <img className="h-10 sm:h-16" src={waiter} alt="waiter icon" />
                    <strong className=''>WAITER</strong>
                </div>
                <Link to='/'>
                    <div className="flex items-center text-xs sm:text-lg">
                        <img className="h-8 sm:h-12" src={logoutbtn} alt="logout icon" />
                        <strong className='px-2'>LOGOUT</strong>
                    </div>
                </Link>
            </div>
        </nav >
    )
}
export default WaiterNav;