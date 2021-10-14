
//import React from "react";

import React, {Component} from "react";

class MiComponente extends Component{

    render(){
        const rece = {
            nombre:'pizza',
            arr:[ 1,2,3],
            calo:'caliori'

        };

        return (
            <div className="com">
                <h1> {rece.nombre} </h1>
                <h2> {rece.calo} </h2>
            </div>
         );
    }
}


export default MiComponente;