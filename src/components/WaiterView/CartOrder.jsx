import iconAdd from "../../img/iconAdd.svg";
import iconNegative from "../../img/iconNegative.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CartOrder = ({ selectedProduct, handleDeleteProduct, handleIncreaseProduct, handleDecreaseProduct }) => {


  return (

    <tbody className="tex-center">
      {selectedProduct.map((product) => (
        <tr key={product._id}>
          <td>{product.name} </td>
          <td>
            <img onClick={() => handleDecreaseProduct(product._id)} src={iconNegative} alt={""} />
            {product.qty}
            <img onClick={() => handleIncreaseProduct(product._id)} src={iconAdd} alt={""} />
          </td>
          <td> ${(product.price) * product.qty} </td>
          <td >
            <FontAwesomeIcon onClick={() => handleDeleteProduct(product._id)} icon={faTrashAlt} />
          </td>
        </tr>
      ))}
    </tbody>
  )
}


export default CartOrder;