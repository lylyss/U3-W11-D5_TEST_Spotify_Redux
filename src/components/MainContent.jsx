import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions/index.js";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";

const NavigationLinks = () => (
  <Row className="d-flex justify-content-center align-items-center flex-wrap " style={{ padding: "0 160px" }}>
    <Col xs={12} md={2} className="text-center mb-2 p-0">
      <a className="text-decoration-none text-secondary fw-medium nav-link-hover" style={{ fontSize: "10px" }} href="#">
        TREDING
      </a>
    </Col>
    <Col xs={12} md={2} className="text-center mb-2 p-0">
      <a className="text-decoration-none text-secondary fw-medium nav-link-hover" style={{ fontSize: "10px" }} href="#">
        PODCAST
      </a>
    </Col>
    <Col xs={12} md={2} className="text-center mb-2 p-0">
      <a className="text-decoration-none text-secondary fw-medium nav-link-hover" style={{ fontSize: "10px" }} href="#">
        MOODS AND GENRES
      </a>
    </Col>
    <Col xs={12} md={2} className="text-center mb-2 p-0">
      <a className="text-decoration-none text-secondary fw-medium nav-link-hover" style={{ fontSize: "10px" }} href="#">
        NEW RELEASES
      </a>
    </Col>
    <Col xs={12} md={2} className="text-center mb-2 p-0">
      <a className="text-decoration-none text-secondary fw-medium nav-link-hover" style={{ fontSize: "10px" }} href="#">
        DISCOVER
      </a>
    </Col>
  </Row>
);

const MainContent = () => {
  const dispatch = useDispatch();
  const rockSongs = useSelector((state) => state.music.rockSongs);
  const popSongs = useSelector((state) => state.music.popSongs);
  const hipHopSongs = useSelector((state) => state.music.hipHopSongs);

  useEffect(() => {
    dispatch(fetchSongs("queen", "rockSongs"));
    dispatch(fetchSongs("katyperry", "popSongs"));
    dispatch(fetchSongs("eminem", "hipHopSongs"));
  }, [dispatch]);

  return (
    <div className="flex-grow-1 py-2">
      <NavigationLinks />

      {/* Rock Classic */}
      <h4 className="text-light text-left mt-4" style={{ paddingLeft: 170 }}>
        Rock Classic
      </h4>
      <Row className="d-flex justify-content-center align-items-center flex-wrap mt-4" style={{ padding: "0 210px" }}>
        {rockSongs.slice(0, 4).map((song) => (
          <AlbumCard key={song.id} song={song} />
        ))}
      </Row>

      {/* Pop Culture */}
      <h4 className="text-light text-left mt-4" style={{ paddingLeft: 170 }}>
        Pop Culture
      </h4>
      <Row className="d-flex justify-content-center align-items-center flex-wrap mt-4 " style={{ padding: "0 210px" }}>
        {popSongs.slice(0, 4).map((song) => (
          <AlbumCard key={song.id} song={song} />
        ))}
      </Row>

      {/* Hip Hop */}
      <h4 className="text-light text-left mt-4" style={{ paddingLeft: 170 }}>
        Hip Hop
      </h4>
      <Row className="d-flex justify-content-center align-items-center flex-wrap mt-4 " style={{ padding: "0 210px" }}>
        {hipHopSongs.slice(0, 4).map((song) => (
          <AlbumCard key={song.id} song={song} />
        ))}
      </Row>
    </div>
  );
};

export default MainContent;
