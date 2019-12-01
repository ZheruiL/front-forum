import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Template from '../template/Template'
import ApiTopic from '../../api/ApiTopic'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { FPaper, PaperSheet } from '../template/weight/surface/FPaper'
import KTime from '../template/weight/dataDisplay/KTime'

// import React, { Component } from 'react'
// import ApiService from '../../service/ApiService'
const btnStyle = {
  marginTop: 10
}

class ListTopicComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      topics: [],
      message: null
    }
    /* this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.reloadProductList = this.reloadProductList.bind(this) */
  }

  componentDidMount () {
    this.reloadTopicList()
  }

  reloadTopicList () {
    /* const topics = []
    topics.push({ _id: 't_1', title: '为什么我能在《死亡搁浅》的世界里逗留100小时？', content: '游研社： 我已经是30万赞的搁浅KOL了。 文 / 嘤肉卫星 看到这篇文章的时候，应该有不少玩家已经走上了“快递”或者“云快递”之旅了，对于《死亡搁浅》到底长什么样、怎么玩，应该也有了自己的理解。 我知道对于…' }) */
    ApiTopic.fetchTopics()
      .then((res) => {
        this.setState({ topics: res.data.topics, isLoading: false })
      })
  }

  deleteTopic (topicId) {
    console.log('delete clicked')
    ApiTopic.deleteTopic(topicId)
      .then(res => {
        this.setState({ message: 'topic deleted successfully.' })
        this.setState({ topics: this.state.topics.filter(topic => topic._id !== topicId) })
      })
  }

  render () {
    return (
      <div>
        <Template isLoading={this.state.isLoading}>
          <Button onClick={() => { this.props.history.push('/topic/add') }} variant='outlined' color='primary'>
            <AddIcon />
            New Topic
          </Button>
          {this.state.topics.map((topic, index) => (
            <FPaper key={topic._id}>
              <Typography variant='h5' component='h3'>
                <a href='#' onClick={(e) => { e.preventDefault(); this.props.history.push('/topics/' + topic._id) }}>
                  {topic.title}
                </a>
              </Typography>
              <p>
                {topic.content}
              </p>
              <KTime time={new Date(topic.dateCreate)} />
              <Button
                style={btnStyle}
                startIcon={<DeleteIcon />}
                onClick={() => this.deleteTopic(topic._id)}
                variant='contained'
                color='secondary'
                size='small'
              >
                Delete
              </Button>
            </FPaper>
          ))}
        </Template>
      </div>
    )
  }
}

export default ListTopicComponent
