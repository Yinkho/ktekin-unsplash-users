import React from 'react';
import './App.css';
import Users from './components/users/Users';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/most-popular" component={Users} />
        <Route exact path="/most-active" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
