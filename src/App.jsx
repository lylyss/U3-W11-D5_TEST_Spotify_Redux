import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/player" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
