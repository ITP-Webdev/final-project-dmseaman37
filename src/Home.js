import React from 'react';
import Bio from './Bio';
import DocumentTitle from 'react-document-title';
import { Link, Route, Switch } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <DocumentTitle title="USC Horn Studio">
        <div>
          <h1>Welcome!</h1>
          <p>[INSERT BLURB]</p>
          <h2>Meet our faculty</h2>
          <ul className="nav nav-fill justify-content-center">
            <li className="nav-item"><Link to="/faculty/morrell">Kristy Morrell</Link></li>
            <li className="nav-item"><Link to="/faculty/becknell">Steven Becknell</Link></li>
          </ul>
          <Switch>
            <Route path="/faculty/:name" component={Bio} />
          </Switch>
        </div>
      </DocumentTitle>
    )
  }
}
