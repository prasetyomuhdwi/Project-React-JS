import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEllipsisV,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

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
    const style = {
      card: {
        width: "31vw",
        margin: "1rem",
        display: "flex",
        padding: "2rem 0",
        borderRadius: "10px",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      option: {
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
      },
      text: { color: "whitesmoke" },
      list: { width: "90%" },
      item: {
        width: "100%",
        display: "flex",
        padding: "0.7rem",
        borderRadius: "0.2rem",
        marginBottom: "0.5rem",
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "space-between",
      },
      itemInput: {
        width: "100%",
        display: "flex",
        padding: "0.7rem",
        borderRadius: "0.2rem",
        marginBottom: "0.5rem",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        justifyContent: "space-between",
      },
      itemAdd: {
        width: "100%",
        display: "flex",
        padding: "0.5rem",
        borderRadius: "0.2rem",
        justifyContent: "center",
        color: "rgba(255,255,255,0.8)",
        backgroundColor: "rgba(0,0,0,0.2)",
        border: "2px dashed rgba(255,255,255,0.5)",
      },
      border: {
        width: "90%",
        margin: "0.5rem",
        borderBottom: "3.2px solid rgba(255,255,255,0.5)",
      },
    };
    return (
      <div style={style.card}>
        <div style={style.option}>
          <span style={style.text}>ToDoList</span>
          <span
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              padding: "0.4rem 0.8rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <FontAwesomeIcon
              icon={faEllipsisV}
              color="rgb(255,255,255)"
              style={{ fontSize: "1rem" }}
            />
          </span>
        </div>
        <div style={style.border}></div>
        <div style={style.list}>
          <div style={style.item}>
            <span>
              <FontAwesomeIcon
                icon={faCheckCircle}
                color="rgba(0,0,0,0.5)"
                style={{ marginRight: "0.3rem" }}
              />
              <span>itemName</span>
            </span>
            <span
              style={{
                backgroundColor: "rgba(0,0,0,0.03)",
                padding: "0.2rem 0.8rem",
                borderRadius: "8px",
              }}
            >
              <FontAwesomeIcon
                icon={faEllipsisV}
                color="rgb(0,0,0)"
                style={{ fontSize: "1rem" }}
              />
            </span>
          </div>
          <div style={style.itemInput}>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "1rem",
                border: "transparent",
                borderRadius: "0.3rem",
              }}
              placeholder="what are you working on ?"
            />
            <span style={{ marginTop: "1rem" }}>Est Podomoro</span>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                style={{
                  width: "60%",
                  padding: "0.5rem",
                  border: "transparent",
                  borderRadius: "0.3rem",
                  backgroundColor: "rgba(0,0,0,0.08)",
                }}
                value={estCount}
              />
              <div
                style={{
                  width: "40%",
                  display: "grid",
                  marginLeft: "0.35rem",
                  gridTemplateColumns: "auto auto",
                }}
              >
                <button
                  style={{
                    width: "90%",
                    padding: "0.5rem",
                    borderRadius: "0.3rem",
                    border: "1px solid rgba(0,0,0,0.5)",
                    backgroundColor: "rgba(255,255,255,1)",
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} color="rgb(0,0,0)" />
                </button>
                <button
                  style={{
                    width: "90%",
                    padding: "0.5rem",
                    borderRadius: "0.3rem",
                    border: "1px solid rgba(0,0,0,0.5)",
                    backgroundColor: "rgba(255,255,255,1)",
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} color="rgb(0,0,0)" />
                </button>
              </div>
            </div>
          </div>
          <div style={style.itemAdd}>
            <span>+ Add Task</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
