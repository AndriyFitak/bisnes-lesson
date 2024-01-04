// ProductsContainer.js
import { connect } from "react-redux";
import { createNewProductAC, updateNewProductAC, deleteProductAC } from "../../redux/reducers/productsReducer";
import Products from "./Products";

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProducts: createNewProductAC,
  updateNewProduct: updateNewProductAC,
  deleteProduct: deleteProductAC,
};;

export default connect (mapStateToProps, mapDispatchToProps)(Products);
