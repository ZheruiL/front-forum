import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import Template from '../template/Template'
import ApiTopic from '../../api/ApiTopic'
import Button from '@material-ui/core/Button'

import { FPaper } from '../template/weight/surface/FPaper'
import Chip from '@material-ui/core/Chip'
import ApiComment from '../../api/ApiComment'
import KTime from '../template/weight/dataDisplay/KTime'
import DeleteIcon from '@material-ui/icons/Delete'
import Swal from 'sweetalert2'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const commentInputStyle = {
  width: '100%'
}
const commentDivStyle = {
  marginTop: '18px',
  marginBottom: '18px'
}

class TopicComponent extends Component {
  constructor (props) {
    super(props)
    this.handleAddComment = this.handleAddComment.bind(this)
    // this.deleteComment = this.deleteComment.bind(this)

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
      error += 'content is required'
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
            <br />
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: this.state.topic.content }}
            />
            <br />
            <table>
              <tr>
                <td>
                  <Avatar>J</Avatar>
                </td>
                <td>
                  Jerry
                </td>
              </tr>
            </table>
            <hr />
            <div>
              <Chip label={this.state.countComments + ' comments'} />
            </div>

            <TextField
              onChange={(e) => this.handleChange(e, 'commentContent')}
              value={this.state.commentContent}
              style={commentInputStyle}
              placeholder='write your comment here'
              multiline
              margin='normal'
            />
            <div align='right'>
              <Button onClick={this.handleAddComment} size='small' variant='contained' color='Primary'>
                Comment
              </Button>
            </div>

            {this.state.comments.map((comment, index) => (
              <div key={'comment+' + comment._id} style={commentDivStyle}>
                <table>
                  <tr>
                    <td rowSpan={3} style={{ verticalAlign: 'top' }}>
                      <Avatar>J</Avatar>
                    </td>
                    <td>
                      <b style={{ marginRight: 10 }}>
                        Jerry
                      </b>
                      <KTime time={new Date(comment.dateCreate)} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div
                        style={{ whiteSpace: 'pre-line' }}
                        className='content'
                        dangerouslySetInnerHTML={{ __html: comment.content }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ThumbUpAltIcon style={{ marginRight: 30 }} color='action' />
                      <ThumbDownIcon color='action' />
                    </td>
                  </tr>
                </table>
                {/*
                <Chip
                  icon={<DeleteIcon />}
                  label='Delete'
                  clickable
                  color='secondary'
                  onClick={() => this.deleteComment(comment._id)}
                  variant='outlined'
                /> */}
              </div>
            ))}
          </FPaper>
        </Template>
      </div>
    )
  }
}
/* style={{ marginLeft: 'auto', float: 'right' }} */
export default TopicComponent
