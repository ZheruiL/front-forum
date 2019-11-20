import React, { Component } from 'react'
import Template from "../template/template"
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

// import ApiService from "../../service/ApiService";
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
}));

const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
};

function AddTopicForm(props){
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
  <form>
    <div>
    <TextField
          id="outlined-textarea"
          label="Title"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
    </div>
    {/*<div style={styles.editor} onClick={this.focusEditor}> 
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
  </div>*/}
  </form>
</Paper>
  )
}

class AddTopicComponent extends Component{

  constructor(props){
    super(props);
    this.state ={
     /* _id: '',
      title: '',
      content: '',*/
      editorState: EditorState.createEmpty(),
    }
    this.saveTopic = this.saveTopic.bind(this);
    this.onChange = (editorState) => this.setState({editorState});
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
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
          <AddTopicForm />
        </Template>
      </div>
    );
  }
}

export default AddTopicComponent;