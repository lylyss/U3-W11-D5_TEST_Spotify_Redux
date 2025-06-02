import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { likeSong, setCurrentSong } from "../redux/actions/index.js";
import { Card } from "react-bootstrap";

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

  console.log("Rendering AlbumCard for song:", song);
  return (
    <div className="col-4 col-md-4 col-lg-3 mb-4 position-relative" onClick={handlePlaySong} style={{ cursor: "pointer" }}>
      <Card className="bg-dark text-white border-0 rounded-0 h-100">
        <Card.Img variant="top" src={song.album.cover_medium} alt={song.title} className="rounded-0" />
        <i
          className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"} text-light fs-6`}
          style={{ cursor: "pointer", position: "absolute", top: 5, right: 5 }}
          onClick={handleLike}
        ></i>
      </Card>
      <Card.Title className="text-light text-truncate mb-0 text-center" style={{ fontSize: "0.7rem" }}>
        Track: {song.title}
      </Card.Title>
      <Card.Text className="text-light text-center" style={{ fontSize: "0.7rem" }}>
        Artist: {song.artist.name}
      </Card.Text>
    </div>
  );
};

export default AlbumCard;
