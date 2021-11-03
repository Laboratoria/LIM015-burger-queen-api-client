import iconAdd from "../../img/iconAdd.svg";
import iconNegative from "../../img/iconNegative.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const CartOrder = ({ selectedProduct, handleDeleteProduct, handleIncreaseProduct, handleDecreaseProduct }) => {

  return (

    <tbody className="tex-center">
      {selectedProduct.map((product) => (
        <tr key={product._id}>
          <td>{product.name} </td>
          <td>
            <div className="inline-flex"> 
            <img className=" p-2 " onClick={() => handleDecreaseProduct(product._id)} src={iconNegative} alt={""} />
            {product.qty}
            <img className=" p-2 " onClick={() => handleIncreaseProduct(product._id)} src={iconAdd} alt={""} />
            </div>
          </td>
          <td> $ {(product.price) * product.qty} </td>
          <td >
            <FontAwesomeIcon   className="cursor-pointer" onClick={() => handleDeleteProduct(product._id)} icon={faTrashAlt} />
          </td>
        </tr>
      ))}
    </tbody>
  )
}


export default CartOrder;