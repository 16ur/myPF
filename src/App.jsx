import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CoreContent from "./components/CoreContent/CoreContent";
import AboutContent from "./components/AboutContent/AboutContent";

function App() {
  return (
    <>
      <Navbar />
      <CoreContent />
    </>
  );
}

export default App;
