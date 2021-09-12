import { Component } from "react";
import "./Header.css";

class Header extends Component {
  // constructor() {
  //   super();
  // this.state = {
  //   isLoggedIn: false,
  // };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState((prevState) => {
  //     return {
  //       isLoggedIn: !prevState.isLoggedIn,
  //     };
  //   });
  // }

  render() {
    // const isLoggedIn = this.state.isLoggedIn ? "In" : "Out";
    return (
      <div className="Header">
        <div className="nav">
          <div className="title">Podomoro</div>
          <div className="rightOpt">
            <button className="btn">setting</button>
            <button className="btn">login</button>
          </div>
        </div>
        <div className="border"></div>
      </div>
    );
  }
}

export default Header;
