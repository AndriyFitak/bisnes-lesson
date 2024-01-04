// productsReducer.js
const PRODUCT_CREATE = "PRODUCT-CREATE";
const UPDATE_NEW_PRODUCT = "UPDATE-NEW-PRODUCT";
const CREATE_NEW_PRODUCT = "CREATE-NEW-PRODUCT";
const DELETE_PRODUCT = "DELETE-PRODUCT";

const initialState = {
  list: [
    {
      id: 1,
      name: "Phone",
      price: "",
      description: "",
    },
    {
      id: 2,
      name: "TV",
      price: "",
      description: "",
    },
  ],
  newProductName: "",
};

const productAdd = (state) => {
  return {
    ...state,
    list: [
      ...state.list,
      {
        id: state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1,
        name: state.newProductName,
        price: "",
        description: "",
      },
    ],
    newProductName: "",
  };
};
const deleteProduct = (state, action) => {
  const updatedList = state.list.filter((item) => item.id !== action.productId);
  return {
    ...state,
    list: updatedList,
  };
};

const updateNewProduct = (state, action) => {
  return {
    ...state,
    newProductName: action.newValue,
  };
};

const createNewProduct = (state, action) => {
  return {
    ...state,
    list: [
      ...state.list,
      {
        id: state.list[state.list.length - 1].id + 1,
        name: action.newProduct.name,
        price: action.newProduct.price,
        description: action.newProduct.description,
      },
    ],
  };
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_CREATE:
      return productAdd(state);
    case UPDATE_NEW_PRODUCT:
      return updateNewProduct(state, action);
    case CREATE_NEW_PRODUCT:
      return createNewProduct(state, action);
    case DELETE_PRODUCT:
        return deleteProduct(state, action);
      default:
        return state;
  }
};

export const productCreateAC = () => ({ type: PRODUCT_CREATE });
export const updateNewProductAC = (newValue) => ({
  type: UPDATE_NEW_PRODUCT,
  newValue,
});
export const createNewProductAC = (newProduct) => ({
  type: CREATE_NEW_PRODUCT,
  newProduct,
});
export const deleteProductAC = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});
export default ProductsReducer;
