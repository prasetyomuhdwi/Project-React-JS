// Library //
import react from "react";
import reactDom from "react-dom";
import Header from "./ui/Header/Header";
import Podomoro from "./ui/Podomoro/Podomoro";
import ToDoList from "./ui/Todolist/ToDoList";
import "./index.css";

// init //
const init = {
  imgUrl: "logo512.png",
  name: "Title",
  phoneNum: "09273746573",
  email: "asdhg@adsadsa.com",
};

// Components //
const App = () => {
  return (
    <div className="app">
      <div className="content">
        <Header contact={init} />
        <div className="main">
          <Podomoro contact={init} />
          <ToDoList contact={init} />
        </div>
        <div style={{ width: "100%", height: "5rem", marginTop: "3.3rem" }}>
          <p style={{ textAlign: "center", color: "white" }}>footer</p>
        </div>
      </div>
    </div>
  );
};

// Render //
reactDom.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
);
