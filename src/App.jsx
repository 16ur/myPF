import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CoreContent from "./components/CoreContent/CoreContent";
import AboutContent from "./components/AboutContent/AboutContent";
import WorkCards from "./components/WorkCards/WorkCards";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app-wrapper">
      <Analytics />
      <div className="vertical-line" aria-hidden="true" />
      <Navbar />
      <main className="scroll-container">
        <CoreContent />
        <AboutContent />
        <WorkCards />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
