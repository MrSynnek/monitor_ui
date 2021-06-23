import React from 'react'
import Dashboard from './Components/DashBoard/Dashboard';
import AddController from './Components/AddController/AddController';
import EditController from './Components/Edit/Edit';
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
          <Route path='/edit' component={EditController}/>
        </Switch>
      </Router>
    </>
  )}

export default App;
