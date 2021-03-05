import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './routing/About';
import Contact from './routing/Contact';
import Portfolio from './routing/Portfolio';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';

const myrouter=(
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </ul>

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  </Router>
)

ReactDOM.render(myrouter, document.getElementById('root'));

reportWebVitals();
