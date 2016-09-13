import React from 'react'
import {render} from 'react-dom'
import {Router,browserHistory} from 'react-router'
import routes from './config/routes'

// import {Router,Route,hashHistory} from 'react-router'
// import {Router,Route,browserHistory,IndexRoute} from 'react-router'

render(
   <Router routes={routes} history={browserHistory} />,
   document.getElementById('app')
)
