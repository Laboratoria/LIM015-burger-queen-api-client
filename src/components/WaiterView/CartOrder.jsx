import iconAdd from "../../img/iconAdd.svg";
import iconNegative from "../../img/iconNegative.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Fragment, useState } from 'react';

const CartOrder = ({ selectedProduct }) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <tbody className="tex-center">

      {selectedProduct.map((list) => (
        <tr key={list._id}>

          <td>{list.name} </td>
          <td>
            <img onClick={() => setQuantity(quantity - 1)} src={iconNegative} alt={""} />
            {quantity}
            <img onClick={() => setQuantity(quantity + 1)} src={iconAdd} alt={""} />
          </td>

          <td> ${(list.price) * quantity}</td>

          <td >
            <FontAwesomeIcon icon={faTrashAlt} />
          </td>

        </tr>

      ))}
    </tbody>
  )
}


export default CartOrder;