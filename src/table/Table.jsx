import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Table({ product, deletHandale }) {
  // console.log(deletHandale());
  const { product_name, product_id, quentity, price, msg, color, size } =
    product;
  console.log("hello");
  return (
    <tr style={{ background: "#EBE3D5" }}>
      <td>{product_name}</td>
      <td>{product_id}</td>
      <td>{price}</td>
      <td>{quentity}</td>
      <td>{msg}</td>
      <td>{color}</td>
      <td>{size}</td>
      <td>
        <AiFillDelete onClick={() => deletHandale(product_id)} />
      </td>
    </tr>
  );
}

export default Table;
