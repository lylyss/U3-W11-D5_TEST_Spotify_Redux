import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.music.currentSong);
  const audioRef = useRef(null); // Riferimento all'elemento audio
  const [isPlaying, setIsPlaying] = useState(false); // Stato per gestire Play/Pause

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Metti in pausa
      } else {
        audioRef.current.play(); // Avvia la riproduzione
      }
      setIsPlaying(!isPlaying); // Cambia lo stato
    }
  };

  return (
    <Container fluid className="bg-dark text-white py-2">
      {currentSong ? (
        <Row className="align-items-center">
          {/* Immagine dell'album */}
          <Col xs={2} className="d-flex justify-content-center">
            <img src={currentSong.album.cover_medium} alt={currentSong.title} className="img-fluid" style={{ width: "50px", height: "50px" }} />
          </Col>

          {/* Dettagli della canzone */}
          <Col xs={6} className="text-center">
            <p className="mb-0 fw-bold">{currentSong.title}</p>
            <small>{currentSong.artist.name}</small>
          </Col>

          {/* Controlli audio */}
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Button variant="outline-light" className="me-2">
              <i className="bi bi-skip-backward-fill"></i> {/* Skip Backward */}
            </Button>
            <Button variant="outline-light" className="me-2" onClick={handlePlayPause}>
              <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i> {/* Play/Pause */}
            </Button>
            <Button variant="outline-light" className="me-2">
              <i className="bi bi-skip-forward-fill"></i> {/* Skip Forward */}
            </Button>
            <audio ref={audioRef} src={currentSong.preview} className="d-none" />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="text-center">
            <p className="mb-0">Select a song to play</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MusicPlayer;
