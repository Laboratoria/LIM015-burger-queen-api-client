
import NavOpcion from './WaiterView/Nav';
import React, { Fragment } from "react";
import chef from '../img/chef.svg';



const Chef = () => {

    return (
        <Fragment>
            <NavOpcion
                imgOption={chef}
                option="CHEF"
            />


            <section>

                <h1>Aqui va Chef </h1>
            </section>

        </Fragment>

    )
}
export default Chef;