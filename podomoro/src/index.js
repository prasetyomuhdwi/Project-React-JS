// Library //
import reactDom from "react-dom";
// import Card from "./Components/ContactCard"
import NavBar from "./Components/NavBar"
import Podomoro from "./Components/Podomoro";
import ToDoList from "./Components/ToDoList";
import './css/style.css';

// init //
const contact = {imgUrl:"logo512.png", name:"Title", phoneNum:"09273746573", email:"asdhg@adsadsa.com"}

// Components //
const App = () => {
    return (
    <div style={{display:"flex",justifyContent:"center", alignItems:"top",width:"100%",height:"100vh",backgroundColor: "tomato"}}>
        <div style={{display:"flex", alignItems:"center",flexDirection:"column",width:"60%"}}>
            <NavBar contact={contact}/>
            <div style={{display:"flex"}}>
                <Podomoro contact={contact} style={{width:"60%"}}/>
                <ToDoList contact={contact} style={{width:"30%"}}/>
            </div>
            {/* <Card contact={contact}/> */}
        </div>
    </div>
    )
};  

// Render //
reactDom.render(<App />,document.getElementById("root"))