import React from 'react';
import TableCount from './TableCount';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

const API = 'https://dseaman-itp404-project-api.herokuapp.com';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`${API}/api/events`);
    const events = await response.json();
    this.setState({ events });
  }

  deleteEvent = async (id) => {
    await fetch(`${API}/api/events/${id}`, {
      method: 'DELETE'
    });

    this.setState({
      events: this.state.events.filter(eventObject => {
        return eventObject.id !== id;
      })
    });

    window.alert('Event deleted');
  }

  render() {
    return(
      <DocumentTitle title="Events">
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map((eventObject) => {
                return(
                  <tr>
                    <td><Link to={`/event/edit/${eventObject.id}`} key={eventObject.id}>{eventObject.name}</Link></td>
                    <td>{eventObject.date}</td>
                    <td>{eventObject.location}</td>
                    <td>
                      <button className="btn btn-danger" onClick={this.deleteEvent.bind(this, eventObject.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TableCount table={this.state.events} />
          <Link to="/event/add">Add an event</Link>
        </div>
      </DocumentTitle>
    );
  }
}
