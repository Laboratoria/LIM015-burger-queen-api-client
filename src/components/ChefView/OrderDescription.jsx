import TotalTable from "../ChefView/TotalTable";
import ItemsTable from "./ItemsTable";
import StatusOrder from "./StatusOrder";
import Button from "../Button";


const OrderDescription = ({order}) => {
  
    return (
      <div className="bg-white-200 shadow rounded-2xl">
        <div className=" grid grid-rows-2 grid-flow-col gap-2 " key={order._id}>
            <div className="p-2 mt-2 text-blue-400" > Order: { order._id }
            </div>
            <div className="p-2 mt-2"> Waiter:{order.client}</div>
            <div className="p-2 mt-2"> Customer Name: </div>
            <div className="p-2 mt-2 row-span-3 justify-center flex items-center"> Time Order : { order.dateEntry}</div>

        </div>

        <table className="border-collapse border border-green-800 mt-10 ">

         <thead>
         <tr>
             
             {
                 (order)?
                 (order.products.map( (prod)=>
                 
                    <th className="border py-2.5">{prod.qty}
                     </th>
                                             
                )):" "
             }
          
         </tr>
       </thead>

       <tbody>
         <tr>
           <td className="border border-green-600 py-3">{"ITEMS"}</td>
           <ItemsTable />
         </tr>

         <tr>
           <td className="border-green-600 py-3">{"STATUS"}</td>
           <StatusOrder />
         </tr>
       </tbody>
     </table>
     <div className="flex flex-row gap-4 items-center ml-96 pt-10">
            <span className="font-medium tracking-wide"> NOTES: </span>
            <textarea className="bg-amber-100 p-1 my-2 text-lg w-96 h-36"></textarea>
          </div>
          <div className="flex flex-row items-center justify-end ">
            <div className="mr-20">
              <span className="font-medium tracking-wide">
                TOTAL ITEMS:<span className="px-4">{8}</span>{" "}
              </span>
              <Button type={"quaternary"} name={"PENDING"} />
            </div>
          </div>

</div>
     
    )
}
export default OrderDescription;