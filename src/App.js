import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Customers from "./Components/Customers";
import Trainings from "./Components/Trainings";
import Calendar from "./Components/CalendarView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gym Database</h1>
        </header>
        <BrowserRouter>
          <div className="nav_main">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Frontpage
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">
                  Customers
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trainings">
                  Trainings
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                  Calendar
                </Link>{" "}
              </li>
            </ul>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <h3>Welcome! We haven't seen you in a while.</h3>}
              />
              <Route path="/customers" component={Customers} />
              <Route path="/trainings" component={Trainings} />
              <Route path="/calendar" component={Calendar} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
