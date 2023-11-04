import { useState } from "react";
import "./App.css";
import "./assets/root.scss";
import "./assets/profilCard.scss";
import "./assets/cards.scss";
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
