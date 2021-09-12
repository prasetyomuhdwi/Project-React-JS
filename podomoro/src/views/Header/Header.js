import { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
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
