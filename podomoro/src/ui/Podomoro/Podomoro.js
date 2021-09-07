import { Component } from "react";

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
    const style = {
      card: {
        width: "90%",
        margin: "1rem",
        display: "flex",
        padding: "2rem 0",
        borderRadius: "10px",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      option: {
        display: "flex",
        width: "50%",
        justifyContent: "space-around",
        alignItems: "center",
      },
      time: {
        fontSize: "9rem",
        color: "white",
        fontWeight: "700",
      },
      btn: {
        border: "none",
        width: "48%",
        color: "tomato",
        fontWeight: "800",
        fontSize: "1.8rem",
        borderRadius: "8px",
        padding: "1rem",
        textTransform: "uppercase",
        outlineColor: "transparent",
        backgroundColor: "whitesmoke",
      },
      btnOption: {
        border: "none",
        fontSize: "20px",
        borderRadius: "3px",
        color: "whitesmoke",
        padding: "0.4rem 0.5rem",
        outlineColor: "transparent",
        backgroundColor: "transparent",
      },
      active: {
        border: "none",
        fontSize: "20px",
        color: "whitesmoke",
        borderRadius: "3px",
        padding: "0.4rem 0.5rem",
        outlineColor: "transparent",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      },
    };
    return (
      <div style={style.card}>
        <div style={style.option}>
          <button style={style.active}>Podomoro</button>
          <button style={style.btnOption}>Short Break</button>
          <button style={style.btnOption}>Long Break</button>
        </div>
        <div style={style.time}>{time}:00</div>
        <button style={style.btn}>Start</button>
      </div>
    );
  }
}

export default Podomoro;
