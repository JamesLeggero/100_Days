import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Users from './components/Users'
import Show from './components/Show'

function App() {



  return (
    <div className="App">
      
      <Router>
        <Link to={'/users'}>Go home</Link>
        {/* <Switch>
          <Route path='/users' component={Users} />
          <Route path='' */}
        <Users />
        {/* </Switch> */}
      </Router>
     
    </div>
  );
}

export default App;
