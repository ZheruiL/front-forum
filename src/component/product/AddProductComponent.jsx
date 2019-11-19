import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddProductComponent extends Component{

  constructor(props){
    super(props);
    this.state ={
      name: '',
      type: '',
      price: '',
      rating: '',
      available: '',
    }
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct = (e) => {
    e.preventDefault();
    let product = {name: this.state.name, type: this.state.type, price: this.state.price, rating: this.rating, available: this.available};
    ApiService.addProduct(product)
      .then(res => {
        this.setState({message : 'Product added successfully.'});
        this.props.history.push('/products');
      });
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return(
      <div>
        <h2 className="text-center">Add Product</h2>
        <form>
          <div className="form-group">
            <label>Product Name: </label>
            <input type="text" placeholder="product name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>type: </label>
            <input type="text" placeholder="type" name="type" className="form-control" value={this.state.type} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>price: </label>
            <input placeholder="price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>rating: </label>
            <input placeholder="rating" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>available:</label>
            <input type="number" placeholder="available" name="available" className="form-control" value={this.state.available} onChange={this.onChange}/>
          </div>

          <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
        </form>
      </div>
    );
  }
}

export default AddProductComponent;