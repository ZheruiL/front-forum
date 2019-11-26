import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

class LinearProgressComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { completed: 0, display: 'block' }
  }

  componentDidMount () {
    let t = 0
    this.LinearProgressBeginID = setInterval(
      () => {
        // console.log('props: ' + this.props.isLoading)
        if (this.props.isLoading === true) {
          // s = 0.5 g t2 :: v=gt
          // const Newcompleted = this.state.completed + 1
          t += 0.01
          let Newcompleted = 100000 * t * t
          if (Newcompleted >= 30) {
            Newcompleted = 30
          }
          this.setState({ completed: Newcompleted })
        } else {
          this.setState({ completed: 100 })
          setTimeout(() => { this.setState({ display: 'none' }) }, 500) // 完成后过0.5秒消失
          clearInterval(this.LinearProgressBeginID)
        }
      },
      10
    )
  }

  componentWillUnmount () {
    clearInterval(this.LinearProgressBeginID)
  }

  render () {
    const style = {
      display: this.state.display
    }

    return (
      <LinearProgress style={style} variant='determinate' value={this.state.completed} />
    )
  }
}

export default LinearProgressComponent
