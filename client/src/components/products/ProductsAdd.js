import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productActions";
import Uploader from "../formik/Uploader";

class ProductsAdd extends Component {
  state = {
    title: "",
    price: "",
    description: "",
    picUrl: this.props.picUrl,
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      picUrl: this.state.picUrl,
    };
    this.props.addProduct(newProduct);
    this.setState({
      title: "",
      price: "",
      description: "",
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        Add Product
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="tree fields">
            <div className="field">
              <input
                type="text"
                name="title"
                placeholder="Add product"
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="price"
                placeholder="Price"
                onChange={this.onChange}
              />
            </div>
          </div>
          <Uploader onChange={this.onChange} picUrl={this.state.picUrl} />
          <button className="positive ui button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  picUrl: state.picUrl,
  // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addProduct })(ProductsAdd);
