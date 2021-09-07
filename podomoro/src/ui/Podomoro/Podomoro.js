import { Component } from "react";
import "./Podomoro.css";

class Podomoro extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      time: 25,
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
    const time = this.state.time;
    return (
      <div className="card">
        <div className="option">
          <button className="active">Podomoro</button>
          <button className="btnOption">Short Break</button>
          <button className="btnOption">Long Break</button>
        </div>
        <div className="time">{time}:00</div>
        <button className="btnStart">Start</button>
      </div>
    );
  }
}

export default Podomoro;
