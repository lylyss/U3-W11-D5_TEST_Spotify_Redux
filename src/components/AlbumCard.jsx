import { useDispatch, useSelector } from "react-redux";
import { likeSong, setCurrentSong } from "../redux/actions";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.music.likedSongs);
  const isLiked = likedSongs.includes(song.id);

  const handleLike = () => {
    dispatch(likeSong(song.id));
  };

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="col text-center">
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleLike}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default AlbumCard;
