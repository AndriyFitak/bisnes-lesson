// productsReducer.js
const PRODUCT_CREATE = "PRODUCT-CREATE";
const UPDATE_NEW_PRODUCT = "UPDATE-NEW-PRODUCT";
const CREATE_NEW_PRODUCT = "CREATE-NEW-PRODUCT";
const DELETE_PRODUCT = "DELETE-PRODUCT";
const UPDATE_QUANTITY = "UPDATE-QUANTITY"; // New action type for updating quantity

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
        id: state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1,
        name: action.newProduct.name,
        price: action.newProduct.price,
        description: action.newProduct.description,
        quantity: 1, 
      },
    ],
  };
};


const updateQuantity = (state, action) => {
  const updatedList = state.list.map((item) =>
    item.id === action.productId ? { ...item, quantity: action.newQuantity } : item
  );

  return {
    ...state,
    list: updatedList,
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
    case UPDATE_QUANTITY:
      return updateQuantity(state, action); // Handle quantity updates
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
export const updateQuantityAC = (productId, newQuantity) => ({
  type: UPDATE_QUANTITY,
  productId,
  newQuantity,
});

export default ProductsReducer;
