// Products.jsx
import React, { useState } from "react";
import {
  ProductsWrapper,
  ProductForm,
  ProductList,
  ProductItem,
  ProductInfo,
  ProductActions,

} from "../../Components/Products.styled.js"


const Products = (props) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
const handleDelete = (id) => {
    props.deleteProduct(id);
  };
  
  const ProductsCollection = props.products.list.map((item) => (
    <ProductItem key={item.id}>
      <ProductInfo>
        <div>{item.name}</div>
        <div>Price: {item.price}</div>
        <div>Description: {item.description}</div>
      </ProductInfo>
      <ProductActions>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </ProductActions>
    </ProductItem>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleClick = () => {
    const { name, price, description } = newProduct;
    const newProductData = { name, price, description };
    props.addProducts(newProductData);
    setNewProduct({
      name: "",
      price: "",
      description: "",
    });
  };

  return (
    <ProductsWrapper>
      <ProductForm>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
          value={newProduct.name}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Price"
          name="price"
          value={newProduct.price}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
          value={newProduct.description}
        />
        <button onClick={handleClick}>Create Product</button>
      </ProductForm>

      <ProductList>{ProductsCollection}</ProductList>
    </ProductsWrapper>
  );
};

export default Products;
