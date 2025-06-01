import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { likeSong, setCurrentSong } from "../redux/actions/index.js";
import { Card, Row } from "react-bootstrap";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.music.likedSongs);
  const isLiked = likedSongs.includes(song.id);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(likeSong(song.id));
  };

  const handlePlaySong = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 position-relative" onClick={handlePlaySong} style={{ cursor: "pointer" }}>
      <Card className="bg-dark text-white h-100">
        <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} />
        {/* Icona del cuore */}
        <i
          className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"} text-light position-absolute`}
          style={{ top: "10px", right: "10px", fontSize: "1.5rem", cursor: "pointer" }}
          onClick={handleLike}
        ></i>
        {/* Titolo con sfondo trasparente */}
        <Card.Body className="position-absolute bottom-0 w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <Card.Title className="text-white text-truncate" style={{ fontSize: "0.9rem" }}>
            {song.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

const Album = ({ allSongs }) => {
  return (
    <Row>
      {allSongs.map((song) => (
        <AlbumCard key={song.id} song={song} />
      ))}
    </Row>
  );
};

export default Album;
