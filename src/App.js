import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Events from './Events';
import Add from './Event/Add';
import Edit from './Event/Edit';
import PageNotFound from './PageNotFound';
import './App.css';

export default function App(props) {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Router>
            <div className="header">
              <ul className="nav nav-fill justify-content-center">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/members">Members</Link></li>
                <li className="nav-item"><Link to="/events">Events</Link></li>
              </ul>
            </div>
            <Switch>
              <Route path="/" exact={true}><Home /></Route>
              <Route path="/faculty" component={Home} />
              <Route path="/members"><Members /></Route>
              <Route path="/events"><Events /></Route>
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
