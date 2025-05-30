import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, likeSong } from "../redux/actions/index.js";
import AlbumCard from "../components/AlbumCard";
import MusicPlayer from "../components/MusicPlayer";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const popSongs = useSelector((state) => state.music.popSongs);
  const rockSongs = useSelector((state) => state.music.rockSongs);
  const hipHopSongs = useSelector((state) => state.music.hipHopSongs);
  const likedSongs = useSelector((state) => state.music.likedSongs);

  useEffect(() => {
    dispatch(fetchSongs("katyperry", "popSongs"));
    dispatch(fetchSongs("queen", "rockSongs"));
    dispatch(fetchSongs("eminem", "hipHopSongs"));
  }, [dispatch]);

  const handleLike = (songId) => {
    dispatch(likeSong(songId));
  };

  const allSongs = [...popSongs, ...rockSongs, ...hipHopSongs].slice(0, 4);
  console.log("All Songs (limited to 4):", allSongs);
  console.log("Pop Songs:", popSongs);
  console.log("Rock Songs:", rockSongs);
  console.log("Hip Hop Songs:", hipHopSongs);
  console.log("All Songs:", allSongs);

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col xs={2} className="bg-black text-white vh-100 position-fixed px-1" style={{ zIndex: 1000 }}>
          <div className="d-flex flex-column p-3 h-100">
            <img src="src/assets/logo.png" alt="logo spotify" />
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white mt-4">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <Nav.Link href="/favorites" className="text-white">
                <i className="bi bi-book-fill"></i> La tua biblioteca
              </Nav.Link>
            </Nav>
            <div className="mt-auto">
              <Button variant="light" className="w-100 mb-2 rounded-5 py-1">
                Iscrizione
              </Button>
              <Button variant="outline-light" className="w-100 rounded-5 py-1">
                Login
              </Button>
              <Row className="mt-3 text-center">
                <a className="text-secondary text-decoration-none col-12 px-0 " style={{ fontSize: 10 }} href="#">
                  Inormazioni sui cookie | Privasy
                </a>{" "}
              </Row>
            </div>
          </div>
        </Col>

        {/* Main Content */}
        <Col xs={{ span: 10, offset: 2 }} className="bg-secondary text-white d-flex flex-column p-0">
          <div className="flex-grow-1 py-4">
            <Col>
              <a className="text-decoration-none text-dark mx-4" style={{ fontSize: 10 }} href="#">
                DI TENDENZA
              </a>
              <a className="text-decoration-none text-dark mx-4" style={{ fontSize: 10 }} href="#">
                PODCAST
              </a>
              <a className="text-decoration-none text-dark mx-4" style={{ fontSize: 10 }} href="#">
                STATI D'ANIMO E NENERI
              </a>
              <a className="text-decoration-none text-dark mx-4" style={{ fontSize: 10 }} href="#">
                NUOVE USCITE
              </a>
              <a className="text-decoration-none text-dark mx-4" style={{ fontSize: 10 }} href="#">
                SCOPRIRE
              </a>
            </Col>

            <Row>
              {allSongs.map((song) => (
                <AlbumCard key={song.id} song={song} onLike={handleLike} isLiked={likedSongs.some((likedSong) => likedSong.id === song.id)} />
              ))}
            </Row>
          </div>

          {/* Music Player */}
          <div className="bg-dark text-white position-sticky m-0" style={{ bottom: 0 }}>
            <MusicPlayer />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
