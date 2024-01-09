// Products.jsx
import React, { useState } from "react";
import {
  ProductsWrapper,
  ProductForm,
  ProductList,
  ProductItem,
  ProductInfo,
  ProductActions,
} from "../../Components/Products.styled.js";

const Products = (props) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleQuantityChange = (productId, amount) => {
    amount = parseInt(amount, 10); 
    props.updateQuantity(productId, Math.max(1, amount));
  };
  

  const handleCreateProduct = () => {
    const { name, price, description } = newProduct;
    const newProductData = { name, price, description, quantity: 1 };
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
        <button onClick={handleCreateProduct}>Create Product</button>
      </ProductForm>

      <ProductList>
        {props.products.list.map((item) => (
          <ProductItem key={item.id}>
            <ProductInfo>
              <div>{item.name}</div>
              <div>Price: {item.price}</div>
              <div>Description: {item.description}</div>
              <div>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              </div>
            </ProductInfo>
            <ProductActions>
              <button onClick={() => props.deleteProduct(item.id)}>Delete</button>
            </ProductActions>
          </ProductItem>
        ))}
      </ProductList>
    </ProductsWrapper>
  );
};

export default Products;
