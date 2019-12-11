import React from "react";

export default class EmailValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: props.email,
      message: ""
    }
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    if(email.search(/^\w{2,}/) === -1) {
      this.setState({ message: "Your email must have a valid handle" });
    }
    else if (email.search(/^\w{2,}[@]/) === -1) {
      this.setState({ message: "Your email must have an @ sign" });
    }
    else if (email.search(/^\w{2,}[@]\w{2,}/) === -1) {
      this.setState({ message: "Your email must have a valid web address" });
    }
    else if (email.search(/^\w{2,}[@]\w{2,}[.](com|org|edu|net)$/i) === -1) {
      this.setState({ message: "Your email must end with a valid suffix" });
    }
    else {
      this.setState({
        email: "",
        message: "Your email has been added"
      });
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <small data-testid="message">{this.state.message}</small><br />
        <input placeholder="Email" data-testid="input" type="text" value={this.state.email} onChange={this.handleChange}/><br />
        <label htmlFor="input">Subscribe to the Thornton events newsletter</label><br />
        <button data-testid="submit">Submit</button>
      </form>
    );
  }
}
