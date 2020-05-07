import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './global.css'

const App = () => (
  <BrowserRouter>
    <Link to='/' className='btnHome'>Home</Link>
    
    <Switch>
      <Route path='/detail/:id'>
        <Detail />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App