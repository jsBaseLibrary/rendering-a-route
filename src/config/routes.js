import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from '../components/App';
import About from '../components/About'
import Repos from '../components/Repos'
import Repo from '../components/Repo'
import NavLink from '../components/NavLink'

import '../styles/index.less';

module.exports = (
	<Route path="/" component={App}>
	      <Route path="/repos" component={Repos}>
	      	<Route path="/repos/:userName/:repoName" component={Repo}/>
	      </Route>
	      <Route path="/about" component={About}/>
	</Route>
)
