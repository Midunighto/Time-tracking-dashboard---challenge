import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/root.scss";
import "./assets/ProfilCard.scss";
import "./assets/cards.scss";
import data from "../data.json";
import ProfilCard from "./components/ProfilCard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const [display, setDisplay] = useState("daily");
  return (
    <div className="main">
      <ProfilCard setDisplay={setDisplay} />
      <Cards setDisplay={setDisplay} display={display} />
      <Footer />
    </div>
  );
}

export default App;
