import logoutbtn from '../../img/logoutbtn.svg';
import { Link } from 'react-router-dom';


const NavOpcion = (props) => {

    return (
        <nav>
            <div className="bg-gradient-to-r from-green-200 via-yellow-100 to-green-200 h-14 sm:h-20 flex justify-between  items-center py-4" >
                {props.imgHome ?
                 
                <div className="flex items-center text-xs sm:text-lg sm:px-5" >
                    <img className="px-4 h-15 sm:h-14" src={props.imgHome} alt="burger icon" />
                    <Link to={props.linkHome} >
                    <strong className=''>{props.home}</strong>
                    </Link>
                </div> 
                

                : <div className="flex items-center text-xs sm:text-lg sm:px-5" > </div> }

                <div className="flex items-center text-xs  px-4 sm:text-lg">
                    <img className="h-80 sm:h-16" src={props.imgOption} alt="waiter icon" />
                    <Link to={props.linkOption} >
                    <strong>{props.option}</strong>
                    </Link>
                </div>

                <Link to='/'>
                    <div className="flex items-center  px-2 text-xs sm:text-lg">
                        <img className="h-8 sm:h-12" src={logoutbtn} alt="logout icon" />
                        <strong className='px-2'>LOGOUT</strong>
                    </div>
                </Link>
            </div>
        </nav >
    )
}
export default NavOpcion;