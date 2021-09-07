// Library //
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
          <Podomoro contact={init} style={{ width: "60%" }} />
          <ToDoList contact={init} style={{ width: "30%" }} />
        </div>
      </div>
    </div>
  );
};

// Render //
reactDom.render(<App />, document.getElementById("root"));
