import react, { Component } from "react";

class ContactCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn ? "In" : "Out";
    return (
      <div>
        <h1>
          You are currently logged <b>{isLoggedIn}</b>
        </h1>
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? "logout" : "login"}
        </button>
      </div>
    );
  }
}

export default ContactCard;
