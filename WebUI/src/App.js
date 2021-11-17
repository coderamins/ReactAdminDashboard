import React from "react";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route ,Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route exact path="/users" element={ <UserList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
