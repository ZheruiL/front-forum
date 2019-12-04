import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

class LinearProgressComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { display: 'block' }
  }

  /* componentDidMount () {
    // 如果变成false就消失，还有更好的办法吗？
    this.LinearProgressBeginID = setInterval(
      () => {
        // console.log('props: ' + this.props.isLoading)
        if (this.props.isLoading === false) {
          setTimeout(() => { this.setState({ display: 'none' }) }, 800) // 完成后过0.5秒消失
          clearInterval(this.LinearProgressBeginID)
        }
      },
      100
    )
  } */
  componentWillReceiveProps (nextProps) {
    // console.log(nextProps)
    if (nextProps.isLoading === false) {
      setTimeout(() => { this.setState({ display: 'none' }) }, 500) // 完成后过0.5秒消失
    }
    if (nextProps.isLoading === true) {
      this.setState({ display: 'block' })
    }
  }

  render () {
    const style = {
      display: this.state.display,
      position: 'fixed',
      zIndex: 99999,
      width: '100%'
    }
    return (
      <LinearProgress style={style} />
    )
  }
}

export default LinearProgressComponent
