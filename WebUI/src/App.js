import React from "react";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div class="container">
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
