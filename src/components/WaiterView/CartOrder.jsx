import iconAdd from "../../img/iconAdd.svg";
import iconNegative from "../../img/iconNegative.svg";
import iconDelete from "../../img/iconDelete.svg";


const CartOrder = ({ selectedProduct, setSelectedProduct }) => {

  return (
    <tbody className="tex-center">
      {selectedProduct.map((list) => (
        <tr key={list._id}>
          <td>{list.name} </td>
          <td>
            <img src={iconNegative} alt={""} />{" "}
          </td>
          <td>{list.qty} </td>
          <td className="items-end">
            <img src={iconAdd} alt={""} />{" "}
          </td>
          <td> ${list.price} </td>
          <td >
            <img src={iconDelete} alt={""} />{" "}
          </td>
        </tr>
      ))}
    </tbody>
  )
}


export default CartOrder;