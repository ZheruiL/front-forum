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
    // var self = this
    // 模拟载入时间
    /* setTimeout(function () {
      self.reloadTopicList()
    }, 100) */
    this.reloadTopicList()
  }

  reloadTopicList () {
    /* const topics = []
    topics.push({ _id: 't_1', title: '为什么我能在《死亡搁浅》的世界里逗留100小时？', content: '游研社： 我已经是30万赞的搁浅KOL了。 文 / 嘤肉卫星 看到这篇文章的时候，应该有不少玩家已经走上了“快递”或者“云快递”之旅了，对于《死亡搁浅》到底长什么样、怎么玩，应该也有了自己的理解。 我知道对于…' })
    topics.push({ _id: 't_2', title: '我在网上合法买了正规电影，让大家一起看违法吗? ', content: '漢韻華風： 我花十块钱买了漫威电影 让宿舍的人一起看 宿舍的人就不用花钱 ——如果都在你个人使用的电脑上播放观看，合法。 如果我做了个网站让几十万人一起看' })
    topics.push({ _id: 't_3', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' })
    topics.push({ _id: 't_4', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' })
    topics.push({ _id: 't_5', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' })
    topics.push({ _id: 't_6', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' })
    topics.push({ _id: 't_7', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' }) */

    ApiTopic.fetchTopics()
      .then((res) => {
        // console.log(res.data.topics)
        this.setState({ topics: res.data.topics, isLoading: false })
      })
    // this.setState({ topics: topics, isLoading: false })
  }

  deleteTopic (topicId) {
    console.log('delete clicked')
    ApiTopic.deleteTopic(topicId)
      .then(res => {
        console.log('caonima2')
        this.setState({ message: 'topic deleted successfully.' })
        this.setState({ topics: this.state.topics.filter(topic => topic._id !== topicId) })
      })
    console.log('caonima3')
  }

  /* deleteProduct (productId) {
    ApiService.deleteProduct(productId)
      .then(res => {
        this.setState({ message: 'Product deleted successfully.' })
        this.setState({ products: this.state.products.filter(product => product._id !== productId) })
      })
  } */

  /* editProduct (id) {
    window.localStorage.setItem('productId', id)
    this.props.history.push('/edit-product')
  } */

  /* addProduct () {
    window.localStorage.removeItem('productId')
    this.props.history.push('/add-product')
  } */

  render () {
    return (
      <div>
        <Template isLoading={this.state.isLoading}>
          <Button onClick={() => { this.props.history.push('/topic/add') }} variant='outlined' color='primary'>
            <AddIcon />
            New Topic
          </Button>
          {this.state.topics.map((topic, index) => (
            <FPaper key={topic._id} title={topic.title} content={topic.content}>
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
