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
    const estCount = 1;
    return (
      <div className="card">
        <div className="option">
          <span className="text">ToDoList</span>
          <span className="faEllipsisV">
            <FontAwesomeIcon
              icon={faEllipsisV}
              color="rgb(255,255,255)"
              style={{ fontSize: "1rem" }}
            />
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
            <span className="faEllipsisVBlack">
              <FontAwesomeIcon
                icon={faEllipsisV}
                color="rgb(0,0,0)"
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
              <input type="number" className="inputEst" value={estCount} />
              <div className="adjustEst">
                <button className="btnAdjustEst">
                  <FontAwesomeIcon icon={faPlus} color="rgb(0,0,0)" />
                </button>
                <button className="btnAdjustEst">
                  <FontAwesomeIcon icon={faMinus} color="rgb(0,0,0)" />
                </button>
              </div>
            </div>
          </div>
          <div className="itemAdd">
            <span>+ Add Task</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
