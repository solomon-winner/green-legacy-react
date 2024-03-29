import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import GiRegistry from "./components/GiRegistry";
import Projects from "./components/Projects";
import MapData from "./components/MapData";

function App() {
  
  
  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Slider/>
      <GiRegistry/>
      <Projects/>
      <MapData/>
    </div>
  );
}

export default App;
