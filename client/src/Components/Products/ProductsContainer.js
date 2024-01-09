// ProductsContainer.js
import { connect } from "react-redux";
import { createNewProductAC, updateNewProductAC, deleteProductAC, updateQuantityAC } from "../../redux/reducers/productsReducer";
import Products from "./Products";

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProducts: createNewProductAC,
  updateNewProduct: updateNewProductAC,
  deleteProduct: deleteProductAC,
  updateQuantity: updateQuantityAC, // Make sure to include this line
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
