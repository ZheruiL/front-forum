import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditProductComponent extends Component {

  constructor(props){
    super(props);
    this.state ={
      id: '',
      name: '',
      type: '',
      price: '',
      rating: '',
      available: '',
    }
    this.saveProduct = this.saveProduct.bind(this);
    this.loadProduct = this.loadProduct.bind(this);
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct() {
    ApiService.fetchProductById(window.localStorage.getItem("productId"))
      .then((res) => {
        let product = res.data;
        this.setState({
          id: product._id,
          name: product.name,
          type: product.type,
          price: product.price,
          rating: product.rating,
          available: product.available,
        })
      });
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  saveProduct = (e) => {
    e.preventDefault();
    let product = {id: this.state.id, name: this.state.name, type:this.state.type,  price: this.state.price, rating: this.state.rating, available: this.state.available};
    ApiService.editProduct(product)
      .then(res => {
        this.setState({messrating : 'Product changed successfully.'});
        this.props.history.push('/products');
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Edit Product</h2>
        <form>
          <div className="form-group">
            <label>Product id: {this.state.id}</label>
          </div>

          <div className="form-group">
            <label>name</label>
            <input placeholder="Product Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>type</label>
            <input placeholder="Product type" name="type" className="form-control" value={this.state.type} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type='number' placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>rating:</label>
            <input type="number" placeholder="rating" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Salary:</label>
            <input type="number" placeholder="available" name="available" className="form-control" value={this.state.available} onChange={this.onChange}/>
          </div>

          <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditProductComponent;