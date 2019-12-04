import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Template from '../template/Template'
import ApiTopic from '../../api/ApiTopic'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { FPaper } from '../template/weight/surface/FPaper'
import KEditor from '../template/weight/Inputs/KEditor'
import Chip from '@material-ui/core/Chip'

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

  handleChange (e, name) {

  }

  render () {
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
          <Chip label='0 comments' />
          <KEditor
            onChange={(html) => this.handleChange({ target: { value: html } }, 'content')}
            placeholder='write your comment here :D'
          />
          <Button size='large' variant='contained' color='Primary'>
            Comment
          </Button>
        </Template>
      </div>
    )
  }
}
/* style={{ marginLeft: 'auto', float: 'right' }} */
export default TopicComponent
