import React from "react";
import DocumentTitle from "react-document-title";
import { Redirect } from "react-router-dom";

const API = "https://dseaman-itp404-project-api.herokuapp.com";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      location: "",
      nameError: false,
      dateError: false,
      locationError: false
    }
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.name === "") {
      await this.setState({
        nameError: true
      });
    } else {
      await this.setState({
        nameError: false
      })
    }

    if (this.state.date === "") {
      await this.setState({
        dateError: true
      });
    } else {
      await this.setState({
        dateError: false
      })
    }

    if (this.state.location === "") {
      await this.setState({
        locationError: true
      });
    } else {
      await this.setState({
        locationError: false
      })
    }

    if ((!this.state.nameError) && (!this.state.dateError) && (!this.state.locationError)) {
      await fetch(`${API}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          date: this.state.date,
          location: this.state.location
        })
      });

      this.setState({ redirectToEventsPage: true });
      alert("Event added");
    }
  }

  render() {
    if (this.state.redirectToEventsPage) {
      return <Redirect to="/events" />
    }

    console.log(this.state);

    return (
      <DocumentTitle title="Add an event">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input class="form-control" type="text" id="name" value={this.state.name} onChange={this.handleNameChange}/>
            <small>{this.state.nameError && "Error: The 'name' field is required"}</small>
          </div>
          <div class="form-group">
            <label htmlFor="date">Date</label>
            <input class="form-control" type="text" id="date" value={this.state.date} onChange={this.handleDateChange}/>
            <small>{this.state.dateError && "Error: The 'date' field is required"}</small>
          </div>
          <div class="form-group">
            <label htmlFor="location">Location</label>
            <input class="form-control" type="text" id="location" value={this.state.location} onChange={this.handleLocationChange}/>
            <small>{this.state.locationError && "Error: The 'location' field is required"}</small>
          </div>
          <button class="btn btn-primary">Add</button>
        </form>
      </DocumentTitle>
    );
  }
}
