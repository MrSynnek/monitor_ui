import React from 'react'
import Dashboard from './Components/DashBoard/Dashboard';
import AddController from './Components/AddController/AddController';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add' component={AddController} />
          <Route path='/edit' component={AddController}/>
        </Switch>
      </Router>
    </>
  )}

export default App;
