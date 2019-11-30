import React, { Component } from 'react'

class KTime extends Component {
  constructor (props) {
    super(props)
    this.state = { dateDiff: this.diffTime(this.props.time, new Date()) }
  }

  componentDidMount () {
    /* this.timerID = setInterval(
      () => this.diffTime(this.props.time, this.state.dateNow),
      1000
    ) */

    this.timerID = setInterval(
      () => {
        this.setState({
          dateDiff: this.diffTime(this.props.time, new Date())
        })
      },
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  diffTime (startDate, endDate) {
    const diff = endDate.getTime() - startDate// .getTime();//时间差的毫秒数

    // 计算出相差天数
    const days = Math.floor(diff / (24 * 3600 * 1000))

    // 计算出小时数
    const leave1 = diff % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000))
    // 计算相差分钟数
    const leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
    const minutes = Math.floor(leave2 / (60 * 1000))

    // 计算相差秒数
    const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
    const seconds = Math.round(leave3 / 1000)

    let returnStr = seconds + ' sec ago'
    if (minutes > 0) {
      if (minutes <= 1) {
        returnStr = minutes + ' minute ago'// + returnStr;
      } else {
        returnStr = minutes + ' minutes ago'// + returnStr;
      }
    }
    if (hours > 0) {
      if (hours <= 1) {
        returnStr = hours + ' hour ago'// + returnStr;
      } else {
        returnStr = hours + ' hrs ago'// + returnStr;
      }
    }
    if (days > 0) {
      if (days <= 1) {
        returnStr = days + ' day ago'
      } else {
        returnStr = days + ' days ago'
      }
    }
    return returnStr
  }

  render () {
    console.log(this.props.time)
    console.log(this.state.dateDiff)
    return (
      <div>
        {this.state.dateDiff}
      </div>
    )
  }
}
export default KTime
