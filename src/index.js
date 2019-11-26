import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Template from './component/template/Template'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'

const numbers = [1, 2, 3, 4, 5]
// const doubled = numbers.map((number) => number * 2) // 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
const doubled = numbers.map((ele) => {
  return ele * 2
})
console.log(doubled)

const btn1 = (
  <div>
    <h1>Hello, world!</h1>
    <button onClick={(e) => showTime(e, 123, 456)}>草泥马</button>
  </div>
)
function Welcome (props) {
  return <h1>吼哇, {props.name}</h1>
}
const element = <Welcome name='dongjianhua' />

function showTime (parm1, parm2, parm3) {
  console.log(parm1)
  console.log(parm2)
  console.log(parm3)
  // ReactDOM.render(btn1, document.getElementById('root'))
  setInterval(tick, 100)
}
function tick () {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}
// ReactDOM.render(btn1, document.getElementById('root'))
const products = []
products.push({ _id: 'product1', name: 'apple', price: 2 })
products.push({ _id: 'product2', name: 'tree', price: 3 })
products.push({ _id: 'product3', name: 'caonima', price: 4 })

// ReactDOM.render(<ProductTable products={products} />, document.getElementById('root'))

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}))

function PaperSheet (props) {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant='h5' component='h3'>
        {props.title}
      </Typography>
      <Typography component='p'>
        {props.content}
      </Typography>
    </Paper>
  )
}
function Test () {
  const topics = []
  topics.push({ _id: 't_1', title: '为什么我能在《死亡搁浅》的世界里逗留100小时？', content: '游研社： 我已经是30万赞的搁浅KOL了。 文 / 嘤肉卫星 看到这篇文章的时候，应该有不少玩家已经走上了“快递”或者“云快递”之旅了，对于《死亡搁浅》到底长什么样、怎么玩，应该也有了自己的理解。 我知道对于…' })
  topics.push({ _id: 't_2', title: '我在网上合法买了正规电影，让大家一起看违法吗? ', content: '漢韻華風： 我花十块钱买了漫威电影 让宿舍的人一起看 宿舍的人就不用花钱 ——如果都在你个人使用的电脑上播放观看，合法。 如果我做了个网站让几十万人一起看' })
  topics.push({ _id: 't_3', title: '你见过最侮辱观众智商的广告是哪个？ ', content: 'TOPYS： 去了台湾，淘宝也开始拍洗脑广告了。：） 这条广告，我看完第一反应，是沉默了3秒。 你以为这就是“超扯”了？ 结果他们还出了双十一续集，我真的觉得我的智商受到了羞辱。 这一次解决了我这两大“心结”：…' })
  return (
    <div>
      <Template>
        {topics.map((topic, index) => (
          <PaperSheet key={topic._id} title={topic.title} content={topic.content} />
        ))}
      </Template>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.render(<Template content = 'qq'/>, document.getElementById('root'))

/* ReactDOM.render(
  element,
  document.getElementById('root')
) */

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
