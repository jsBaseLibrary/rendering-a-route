import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import NavLink from './components/NavLink'

import './styles/index.less';

import {Router,Route,hashHistory} from 'react-router'

render((
   <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      {/* add the new route */}
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),document.getElementById('app'))
