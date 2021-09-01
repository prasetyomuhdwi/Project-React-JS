import react, { Component } from "react";

class NavBar extends Component {
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
    const style = {
      navBar: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "1rem",
      },
      nav: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      },
      title: { color: "whitesmoke", fontWeight: "bold", fontSize: "2rem" },
      btn: {
        width: "4rem",
        padding: "0.4rem 0.5rem",
        outlineColor: "transparent",
        border: "none",
        borderRadius: "3px",
        color: "whitesmoke",
        textTransform: "uppercase",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
      rightOpt: {
        display: "flex",
        width: "17%",
        justifyContent: "space-between",
      },
      border: {
        marginTop: "1rem",
        width: "100%",
        borderBottom: "3.2px solid rgba(0,0,0,0.2)",
      },
    };
    return (
      <div style={style.navBar}>
        <div style={style.nav}>
          <div style={style.title}>Podomoro</div>
          <div style={style.rightOpt}>
            <button style={style.btn}>setting</button>
            <button style={style.btn}>login</button>
          </div>
        </div>
        <div style={style.border}></div>
      </div>
    );
  }
}

export default NavBar;
