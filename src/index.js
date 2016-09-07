import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import NavLink from './components/NavLink'

import './styles/index.less';

// import {Router,Route,hashHistory} from 'react-router'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

render((
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}>
      	<Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),document.getElementById('app'))
