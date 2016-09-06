import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import About from './components/About'
import Repos from './components/Repos'
import NavLink from './components/NavLink'

import './styles/index.less';

import {Router,Route,hashHistory} from 'react-router'

render((
  <Router history={hashHistory}>
	<Route path="/" component={App}>
		<NavLink path="/repos" component={Repos}/>
	    <NavLink path="/about" component={About}/>
    </Route>
  </Router>
),document.getElementById('app'))
