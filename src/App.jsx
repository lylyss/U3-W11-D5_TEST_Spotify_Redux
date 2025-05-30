import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Spotify Redux App</h1>
          <nav>
            <a href="/">Home</a> | <a href="/favorites">Favorites</a> | <a href="/player">Music Player</a>
          </nav>
        </header>
        <main>
          <Routes>
            {/* Rotte definite per i componenti */}
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/player" element={<MusicPlayer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
