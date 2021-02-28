import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../actions/productActions";
import createBrowserHistory from "../../history";
import Uploader from "../formik/Uploader";

class ProductsShow extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  handleDelete = (_id) => {
    this.props.deleteProduct(_id);
  };

  render() {
    const { products } = this.props.products;
    console.log(products);
    return (
      <div className="ui container">
        <div className="ui segments">
          <h3>Products</h3>
          {products.map(({ _id, title, description, picUrl }) => (
            <div key={_id} className="ui segment">
              <h3>{title}</h3>
              <p>{description}</p>
              <img src={picUrl} />
              <button
                className="negative ui button"
                onClick={() => this.handleDelete(_id)}
              >
                Delete
              </button>
              <button
                className="positive ui button"
                onClick={() => console.log("add product details page")}
              >
                Details
              </button>
            </div>
          ))}
        </div>
        <button
          className="ui button"
          onClick={() => createBrowserHistory.push("/payment")}
        >
          Checkout
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});
export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ProductsShow
);
