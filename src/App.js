import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Customers from './Components/Customers';
import Trainings from './Components/Trainings';
import Calendar from './Components/Calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
      <h1>Gym Database</h1>
      </header>
      <BrowserRouter>
      <div>
        <Link to="/">Frontpage</Link>{' '}
        <Link to="/customers">Customers</Link>{' '}
        <Link to="/trainings">Trainings</Link>{' '}
        <Link to="/calendar">Calendar</Link>{' '}
        <Switch>
          <Route exact path = "/" render={() => <h2>Frontpage</h2>} />
          <Route path = "/customers" component={Customers} />
          <Route path = "/trainings" component={Trainings} />
          <Route path = "/calendar" component={Calendar} />
        </Switch>
      </div>
      </BrowserRouter>
      </div>
  
    );
  }
}

export default App;
