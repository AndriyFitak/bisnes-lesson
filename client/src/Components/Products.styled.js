// styles/ProductsStyles.js
import styled from "styled-components";

export const ProductsWrapper = styled.div`
  margin: 20px;
`;

export const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    margin-bottom: 5px;
    padding: 5px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 8px;
    cursor: pointer;
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProductItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #e74c3c;
    color: white;
    margin-left: 10px;
    cursor: pointer;
  }
`;
