import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Template from '../template/Template'
import ApiTopic from '../../api/ApiTopic'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { FPaper } from '../template/weight/surface/FPaper'
import KEditor from '../template/weight/Inputs/KEditor'

class TopicComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      topic: [],
      message: null
    }
    /* this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.reloadProductList = this.reloadProductList.bind(this) */
  }

  componentDidMount () {
    const _id = this.props.match.params._id
    ApiTopic.getTopic(_id)
      .then((res) => {
        console.log(res)
        // console.log(res.data.topics)
        this.setState({ topic: res.data.topic, isLoading: false })
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

          <FPaper>
            <Typography variant='h5' component='h3'>
              {this.state.topic.title}
            </Typography>
            <p>
              {this.state.topic.content}
            </p>
          </FPaper>
          <KEditor />
        </Template>
      </div>
    )
  }
}

export default TopicComponent
