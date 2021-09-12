import { Component } from "react";
import "./Podomoro.css";

class Podomoro extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      time: 25,
      isSelect: "Podomoro",
    };
    this.handleTimeClick = this.handleTimeClick.bind(this);
  }

  handleTimeClick(event) {
    let tmp;
    switch (event.target.dataset.id) {
      case "Podomoro":
        tmp = 25;
        break;
      case "Short":
        tmp = 5;
        break;
      case "Long":
        tmp = 30;
        break;
    }
    this.setState((prevState) => {
      return {
        isSelect: event.target.dataset.id,
        time: tmp,
      };
    });
  }

  render() {
    const time = this.state.time;
    return (
      <div className="cardPodomoro">
        <div className="option">
          <button
            className={
              this.state.isSelect === "Podomoro"
                ? "btnOption active"
                : "btnOption"
            }
            data-id="Podomoro"
            onClick={this.handleTimeClick}
          >
            Podomoro
          </button>
          <button
            className={
              this.state.isSelect === "Short" ? "btnOption active" : "btnOption"
            }
            data-id="Short"
            onClick={this.handleTimeClick}
          >
            Short Break
          </button>
          <button
            className={
              this.state.isSelect === "Long" ? "btnOption active" : "btnOption"
            }
            data-id="Long"
            onClick={this.handleTimeClick}
          >
            Long Break
          </button>
        </div>
        <div className="time">{time}:00</div>
        <button className="btnStart">Start</button>
      </div>
    );
  }
}

export default Podomoro;
