import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListTopicComponent from './component/topic/ListTopicComponent'
import AddTopicComponent from './component/topic/AddTopicComponent'

function App () {
  return (
    <div className='container'>
      <Router>
        <div className='col-md-6'>
          <Switch>
            <Route path='/' exact component={ListTopicComponent} />
            <Route path='/topic/add' component={AddTopicComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

/* const element = <h1>hello World</h1>
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
        <a
          className='App-link'
          href='http://localhost/landen'
          rel='noopener noreferrer'
        >
          草泥马..
        </a>
      </header>
    </div>
  )
} */

export default App
