import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'

const myrouter = (
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </ul>

      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />
    </div>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {myrouter}
  </React.StrictMode>,
)
