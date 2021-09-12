import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEllipsisV,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./ToDoList.css";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      estTime: 1,
    };
    this.increaseEstPodomoro = this.increaseEstPodomoro.bind(this);
    this.decreaseEstPodomoro = this.decreaseEstPodomoro.bind(this);
  }

  increaseEstPodomoro() {
    if (this.state.estTime < 5) {
      this.setState((prevState) => {
        return {
          estTime: prevState.estTime + 1,
        };
      });
    }
  }
  decreaseEstPodomoro() {
    if (this.state.estTime > 1) {
      this.setState((prevState) => {
        return {
          estTime: prevState.estTime - 1,
        };
      });
    }
  }

  render() {
    return (
      <div className="cardTodolist">
        <div className="option">
          <span className="text">ToDoList</span>
          <span className="btnfaEllipsisV">
            <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: "1rem" }} />
          </span>
        </div>
        <div className="border"></div>
        <div className="list">
          <div className="item">
            <span>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color="rgba(0,0,0,0.5)"
                style={{ marginRight: "0.3rem" }}
              />
              <span>itemName</span>
            </span>
            <span className="btnfaEllipsisVBlack">
              <FontAwesomeIcon
                icon={faEllipsisV}
                style={{ fontSize: "1rem" }}
              />
            </span>
          </div>
          <div className="itemInput">
            <input
              type="text"
              className="inputTodo"
              placeholder="what are you working on ?"
            />
            <span style={{ marginTop: "1rem" }}>Est Podomoro</span>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                className="inputEst"
                value={this.state.estTime}
                disabled={true}
              />
              <div className="adjustEst">
                <button
                  className="btnAdjustEst"
                  onClick={this.increaseEstPodomoro}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  className="btnAdjustEst"
                  onClick={this.decreaseEstPodomoro}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
            </div>
          </div>
          <button className="itemAdd">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add Task</p>
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
