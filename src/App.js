import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Events from "./Events";
import Add from "./Event/Add";
import Edit from "./Event/Edit";
import PageNotFound from "./PageNotFound";
import "./App.css";

export default function App(props) {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Router>
            <div className="header">
              <ul className="nav nav-pills nav-fill justify-content-center">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/members">Members</NavLink></li>
                <li className="nav-item"><NavLink to="/events">Events</NavLink></li>
              </ul>
            </div>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/faculty" component={Home} />
              <Route path="/members" component={Members} />
              <Route path="/events" component={Events} />
              <Route path="/event/add" component={Add} />
              <Route path="/event/edit/:id" component={Edit} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
