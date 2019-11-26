import React, { Component } from 'react'
import Template from "../template/Template"
// import ApiService from "../../service/ApiService";
// import { makeStyles } from '@material-ui/core/styles';
import ApiTopic from '../../api/ApiTopic'
import LinearProgressComponent from "../template/LinearProgressComponent"
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {FPaper} from "../template/weight/surface/FPaper"
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 350,
  },
}));


function FTextField() {
  const classes = useStyles()
  return (
    <TextField
    label="Title"
    multiline
    rowsMax="4"
    className={classes.textField}
    margin="normal"
    variant="outlined"
    />
  );
}

function FButtonSend(props) {
  const classes = useStyles()
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<SendIcon/>}
      onClick={props.onClick}
    >
      Add
    </Button>
  )
}

class AddTopicComponent extends Component{
  constructor(props){
    super(props);
    this.addTopic = this.addTopic.bind(this)
    this.onChange = this.onChange.bind(this)
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
    console.log('fasfsadfas')
    let topic = {title: this.state.title, content: this.state.content};
    console.log(topic)
    this.setState({isLoading: true})
    ApiTopic.addTopic(topic)
      .then(res => {
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
            <FPaper>
              <table>
                <tbody>
                <tr>
                  <td>
                    <FTextField name="title" onChange={this.onChange.bind(this)}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <textarea name="content" onChange={this.onChange} cols={40} rows={10} placeholder="content"/>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <FButtonSend onClick={(e) => this.addTopic()}/>
                  </td>
                </tr>
                </tbody>
              </table>
            </FPaper>
          </form>
        </Template>
      </div>
    );
  }
}

export default AddTopicComponent;
