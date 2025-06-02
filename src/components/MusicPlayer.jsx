import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { likeSong } from "../redux/actions/index.js";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.music.currentSong);
  const likedSongs = useSelector((state) => state.music.likedSongs || []);
  const dispatch = useDispatch();
  const audioRef = useRef(null); // Riferimento all'elemento audio
  const [isPlaying, setIsPlaying] = useState(false); // Stato per gestire Play/Pause
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const isLiked = currentSong && likedSongs.includes(currentSong.id);

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

  const handleLike = () => {
    if (currentSong) {
      dispatch(likeSong(currentSong.id));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      });

      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Container fluid className="bg-dark text-white py-2">
      {currentSong ? (
        <Row className="align-items-center">
          <Col xs={3} className="d-flex justify-content-end">
            <img src={currentSong.album.cover_medium} alt={currentSong.title} className="img-fluid" style={{ width: "100px", height: "100px" }} />
            <i
              className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"} text-light fs-5`}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "45px",
                right: "150px",
              }}
              onClick={handleLike}
            ></i>
          </Col>

          <Col xs={6} className="d-flex flex-column align-items-center">
            <div className="text-center mb-2">
              <p className="mb-0 fw-bold">
                {currentSong.title} - <small className="fw-medium">Artist: {currentSong.artist.name}</small>
              </p>
            </div>

            {/* Controlli audio */}
            <div className="d-flex justify-content-center mb-2">
              <Button variant="outline-light" className="border-0">
                <i className="bi bi-shuffle"></i>
              </Button>
              <Button variant="outline-light" className="border-0">
                <i className="bi bi-skip-backward-fill"></i> {/* Skip Backward */}
              </Button>
              <Button variant="outline-light" className=" border-0" onClick={handlePlayPause}>
                <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i> {/* Play/Pause */}
              </Button>
              <Button variant="outline-light" className=" border-0">
                <i className="bi bi-skip-forward-fill"></i> {/* Skip Forward */}
              </Button>
              <Button variant="outline-light" className=" border-0">
                <i className="bi bi-repeat"></i>
              </Button>
            </div>
            <audio ref={audioRef} src={currentSong.preview} className="d-none" />

            {/* Barra di progresso */}
            <div className="w-100">
              <ProgressBar now={progress} variant="white" className="bg-secondary" style={{ height: "3px" }} />
              <div className="d-flex justify-content-between text-secondary mt-1">
                <small>{formatTime(currentTime)}</small>
                <small>{formatTime(duration)}</small>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="text-center mt-3 ">
          <div className="d-flex justify-content-center mb-2">
            <Button variant="outline-light" className="border-0 text-secondary">
              <i className="bi bi-shuffle"></i>
            </Button>
            <Button variant="outline-light" className="border-0 text-secondary">
              <i className="bi bi-skip-backward-fill"></i>
            </Button>
            <Button variant="outline-light" className=" border-0 text-secondary">
              <i className="bi-play-fill"></i>
            </Button>
            <Button variant="outline-light" className=" border-0 text-secondary">
              <i className="bi bi-skip-forward-fill"></i>
            </Button>
            <Button variant="outline-light" className=" border-0 text-secondary">
              <i className="bi bi-repeat"></i>
            </Button>
          </div>
          <Col xs={6} className="mx-auto mb-2">
            <ProgressBar className="bg-secondary" style={{ height: "3px" }}></ProgressBar>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MusicPlayer;
