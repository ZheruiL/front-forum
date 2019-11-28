import React, { Component } from 'react'
import Template from "../template/Template"
// import ApiService from "../../service/ApiService";
// import { makeStyles } from '@material-ui/core/styles';
import ApiTopic from '../../api/ApiTopic'
import LinearProgressComponent from "../template/LinearProgressComponent"


class AddTopicComponent extends Component{

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,

      _id: '',
      title: '',
      content: '',
      /*price: '',
      rating: '',
      available: '',*/
    }
    this.addTopic = this.addTopic.bind(this);
  }

  componentDidMount () {
    this.setState({isLoading: false})
  }

  addTopic(){
    let topic = {title: this.state.title, content: this.state.content};
    console.log(topic)
    this.setState({isLoading: true})
    ApiTopic.addTopic(topic)
      .then(res => {
        /*setTimeout(()=>{
          this.props.history.push('/')
        },2000)*/
        this.props.history.push('/')

        // this.setState({message : 'topics added successfully.'});
        // this.props.history.push('/')
      })
    /* setTimeout(()=>{
      this.props.history.push('/')
    },1000) */

  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return(
      <div>
        <Template isLoading={this.state.isLoading}>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    Title:
                  </td>
                  <td>
                    <input name="title" onChange={this.onChange} type="text" placeholder="title"/>
                  </td>
                </tr>
                <tr>
                  <td>
                    Content:
                  </td>
                  <td>
                    <textarea name="content" onChange={this.onChange} cols={40} rows={10} placeholder="content"/>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="button" onClick={this.addTopic}>Post</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Template>
      </div>
    );
  }
}

export default AddTopicComponent;