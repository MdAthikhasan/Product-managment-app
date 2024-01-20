import React, { useState } from "react";
import "./form.css";
import Table from "../table/Table";

export default function Form() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    product_name: "",
    product_id: "",
    quantity: "",
    price: "",
    msg: "",
    color: "red",
    size: "",
  });

  const formHandler = (e) => {
    e.preventDefault();

    if (
      !products.some((product) => product.product_id === formData.product_id)
    ) {
      setProducts([...products, formData]);
    } else {
      alert("Product with the same id is not allowed");
    }

    setFormData({
      product_name: "",
      product_id: "",
      quantity: "",
      price: "",
      msg: "",
      color: "red",
      size: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const deletHandale = (id) => {
    const filterd = products.filter((product) => product.product_id !== id);
    setProducts(filterd);
  };
  const { product_name, product_id, quantity, price, msg, color, size } =
    formData;
  return (
    <div className="form-container">
      <form className="form" onSubmit={formHandler}>
        <input
          type="text"
          className="forminp"
          name="product_name"
          value={product_name}
          placeholder="Enter Product name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          className="forminp"
          name="product_id"
          type="text"
          value={product_id}
          placeholder="Product id"
          onChange={handleChange}
          required
        />
        <br />
        <input
          className="forminp"
          name="quantity"
          type="text"
          value={quantity}
          placeholder="Quentity"
          onChange={handleChange}
          required
        />
        <br />
        <input
          className="forminp"
          type="text"
          value={price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          style={{ resize: "none" }}
          placeholder="Description..."
          name="msg"
          value={msg}
          id="text"
          cols="34"
          wrap="hard"
          rows="5"
          onChange={handleChange}
          required
        ></textarea>
        <br />

        <button className="sub-btn" type="submit">
          Submit
        </button>
      </form>

      <div className="view-container">
        {products.length > 0 ? (
          <>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Product-name</th>
                    <th>id</th>
                    <th>Product-price</th>
                    <th>Product-quantity</th>
                    <th>Description</th>
                    <th>Color</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <Table
                      key={index}
                      product={product}
                      deletHandale={deletHandale}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => setProducts([])} className="remove-btn">
              Remove All
            </button>
          </>
        ) : (
          "No Product added"
        )}
      </div>
    </div>
  );
}

// export default function Form() {
//   const [value, setValue] = useState();

//   const formHandler = (e) => {
//     e.preventDefault();
//     const elements = [...e.target.elements];

//     const obj = {};

//     elements.forEach((element) => {
//       if (element.type === "radio") {
//         if (element.checked) {
//           obj[element.name] = element.value;
//         }
//       } else {
//         obj[element.name] = element.value;
//       }
//       if (!arr.includes(obj.product_id)) {
//         setValue([...value, obj]);
//       } else {
//         alert("Same id  not allowed");
//       }

//       element.value = "";
//     });
//   };

// //   const deletHandale = (id) => {
// //     const filterd = value.filter((item) => item.product_id !== id);
// //     setValue(filterd);
// //   };

//   return (
//     <div
//
//     >
//       <Form className="fromdiv" onSubmit={formHandler} action="">
//         <input
//           className="forminp"
//           type="text"
//           name="product_name"
//           placeholder="Enter Product name"
//           required
//         />

//
//
//
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <div>
//             <h4>Select a color</h4>
//             <select
//               style={{ borderRadius: "4px" }}
//               name="color"
//               id="color"
//               required
//             >
//               <option value="red" selected></option>
//               <option value="green">Green</option>
//               <option value="black">Black</option>
//             </select>
//           </div>
//           <div className="radio">
//             <h4>Select a size</h4>
//             <input
//               className="radioinput"
//               type="radio"
//               id="x"
//               name="size"
//               value="X"
//             />

//             <label htmlFor="x">X</label>
//             <input
//               className="radioinput"
//               type="radio"
//               id="l"
//               name="size"
//               value="XL"
//               // checked={objproperty , === value}
//             />
//             <label htmlFor="l">XL</label>
//             <input
//               className="radioinput"
//               type="radio"
//               id="m"
//               name="size"
//               value="M"
//             ></input>
//             <label htmlFor="m">M</label>
//           </div>
//         </div>
//         <div className="sub-btn">
//           <button
//             style={{ background: " #2ecc71", border: "none", color: "white" }}
//           >
//             Submit
//           </button>
//         </div>
//       </Form>

 