import React, { Component } from 'react'
import Template from "../template/template"
// import ApiService from "../../service/ApiService";

class AddTopicComponent extends Component{

  constructor(props){
    super(props);
    this.state ={
      _id: '',
      title: '',
      content: '',
      /*price: '',
      rating: '',
      available: '',*/
    }
    this.saveTopic = this.saveTopic.bind(this);
  }

  saveTopic = (e) => {
    e.preventDefault();
    let topic = {_id: this.state.title, title: this.state.title, content: this.state.content};
    /*ApiService.addProduct(product)
      .then(res => {
        this.setState({message : 'Product added successfully.'});
        this.props.history.push('/topics');
      });*/
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return(
      <div>
        <Template>
          <form>
            <label>
              名字:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="提交" />
          </form>
        </Template>
      </div>
    );
  }
}

export default AddTopicComponent;