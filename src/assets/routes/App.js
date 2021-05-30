import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import User from '../../components/User'
import Home from '../../containers/Home';
import Login from '../../components/Login'
import Register from '../../components/Register';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </Router>
  )
}

export default App;