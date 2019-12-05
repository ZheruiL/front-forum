import React, { Component } from 'react'
import Template from '../template/Template'
// import ApiService from "../../service/ApiService";
// import { makeStyles } from '@material-ui/core/styles';
import ApiTopic from '../../api/ApiTopic'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { FPaper } from '../template/weight/surface/FPaper'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import KEditor from '../template/weight/Inputs/KEditor'
import Swal from 'sweetalert2'
import '../../style.css'

function AddBtn (props) {
  return (
    <Button
      type='button'
      variant='contained'
      color='primary'
      endIcon={<SendIcon />}
      onClick={props.onClick}
    >
      Add
    </Button>
  )
}

class AddTopicComponent extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isLoading: true,

      _id: '',
      title: '',
      content: ''
      /* price: '',
      rating: '',
      available: '', */
    }
    // this.addTopic = this.addTopic.bind(this)
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  handleChange (event, name) {
    // this.setState({ [event.target.name]: event.target.value })
    /* if (value !== null) {
      this.setState({ [name]: value })
    } else {
      this.setState({ [name]: event.target.value })
    } */
    this.setState({ [name]: event.target.value })
    // console.log(this.state)
  }

  handleSubmit (event) {
    // alert('提交的名字: ' + this.state.value)
    // event.preventDefault()
    const topic = { title: this.state.title, content: this.state.content }
    // console.log(topic)
    let error = ''
    if (topic.title === '') {
      error += '<p>title is required</p>'
    }
    if (error !== '') {
      Swal.fire({
        title: 'Error!',
        text: 'Title is required',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    this.setState({ isLoading: true })
    ApiTopic.addTopic(topic)
      .then(res => {
        this.props.history.push('/')
      })
  }

  render () {
    return (
      <div>
        <Template isLoading={this.state.isLoading}>
          <form>
            <FPaper>
              <TextField
                label='Title'
                value={this.state.title}
                style={{ width: '80%' }}
                multiline
                rowsMax='4'
                onChange={(e) => this.handleChange(e, 'title')}
                margin='normal'
                variant='outlined'
              />

              <KEditor
                value={this.state.content}
                onChange={(html) => this.handleChange({ target: { value: html } }, 'content')}
              />

              <AddBtn onClick={this.handleSubmit} />
            </FPaper>
          </form>
        </Template>
      </div>
    )
  }
}

export default AddTopicComponent
