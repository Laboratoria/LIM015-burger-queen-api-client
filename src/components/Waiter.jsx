import React, { Fragment } from 'react';
import burgerimg from '../img/burgerimg.svg'
import waiter from '../img/waiter.svg'
import logoutbtn from '../img/logoutbtn.svg'

const Waiter = () => {
    return (
        <Fragment>
            <nav>
                <div className='nav--wrapper'>
                    <div>
                        <img className="navicon--burger" src={burgerimg} alt="burger icon" />
                        <strong className='nav--text'>ORDERS</strong>
                    </div>

                    <div>
                        <img className="navicon--calamardo" src={waiter} alt="waiter icon" />
                        <strong className='nav-text'>WAITER</strong>
                    </div>

                    <div>
                        <img className="navicon--burger" src={logoutbtn} alt="logout icon" />
                        <strong className='nav--text'>LOGOUT</strong>
                    </div>
                </div>
            </nav>

        </Fragment >



    )
}
export default Waiter;