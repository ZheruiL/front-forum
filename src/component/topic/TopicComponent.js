import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import Template from '../template/Template'
import ApiTopic from '../../api/ApiTopic'
import Button from '@material-ui/core/Button'

import { FPaper } from '../template/weight/surface/FPaper'
import KEditor from '../template/weight/Inputs/KEditor'
import Chip from '@material-ui/core/Chip'
import { Paper } from '@material-ui/core'
import ApiComment from '../../api/ApiComment'
import KTime from '../template/weight/dataDisplay/KTime'
import DeleteIcon from '@material-ui/icons/Delete'
import Swal from 'sweetalert2'

const btnStyle = {
  marginTop: 10
}

class TopicComponent extends Component {
  constructor (props) {
    super(props)
    this.handleAddComment = this.handleAddComment.bind(this)

    this.state = {
      _topicId: this.props.match.params._id,
      isLoading: true,
      topic: [],
      countComments: null,
      comments: [],
      commentContent: '',
      message: null
    }
  }

  componentDidMount () {
    // load topic
    ApiTopic.getTopic(this.state._topicId)
      .then((res) => {
        console.log(res)
        // console.log(res.data.topics)
        this.setState({ topic: res.data.topic })
      })
    // load comment
    ApiComment.fetchComments(this.state._topicId)
      .then((res) => {
        this.setState({ comments: res.data.comments, countComments: res.data.comments.length, isLoading: false })
      })
  }

  handleAddComment () {
    const comment = { _topic: this.state._topicId, content: this.state.commentContent }
    // console.log(topic)
    let error = ''
    if (comment.content === '') {
      error += '<p>content is required</p>'
    }
    if (error !== '') {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }
    this.setState({ isLoading: true })
    ApiComment.addComment(comment)
      .then(res => {
        const comment = res.data.result.comment
        const comments = this.state.comments
        comments.unshift(comment)
        this.setState({ comments: comments, commentContent: '', isLoading: false })
      })
  }

  handleChange (event, name) {
    this.setState({ [name]: event.target.value })
  }

  render () {
    // if(this.state.isLoading === true)
    return (
      <div>
        <Template isLoading={this.state.isLoading}>
          <FPaper>
            <Typography variant='h5' component='h3'>
              {this.state.topic.title}
            </Typography>
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: this.state.topic.content }}
            />
          </FPaper>
          <Chip label={this.state.countComments + ' comments'} />

          {this.state.comments.map((comment, index) => (
            <FPaper key={'comment+' + comment._id} type='hover'>
              <div
                className='content'
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
              <KTime time={new Date(comment.dateCreate)} />
              <Button
                style={btnStyle}
                startIcon={<DeleteIcon />}
                onClick={() => this.deleteComment(comment._id)}
                variant='contained'
                color='secondary'
                size='small'
              >
                Delete
              </Button>
            </FPaper>
          ))}

          <Paper>
            <KEditor
              value='bilibili'
              onChange={(html) => this.handleChange({ target: { value: html } }, 'commentContent')}
              placeholder='write your comment here :D'
            />
          </Paper>
          <Button onClick={this.handleAddComment} size='large' variant='contained' color='Primary'>
            Comment
          </Button>
        </Template>
      </div>
    )
  }
}
/* style={{ marginLeft: 'auto', float: 'right' }} */
export default TopicComponent
