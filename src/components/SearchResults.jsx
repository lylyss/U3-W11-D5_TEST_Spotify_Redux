/* import { useSelector, useDispatch } from "react-redux";
import { selectSong, toggleLike } from "../redux/actions/index.js";

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.music.searchResults);
  const likedSongs = useSelector((state) => state.music.likedSongs);

  const handleSongClick = (song) => {
    dispatch(selectSong(song));
  };

  const handleLikeToggle = (songId) => {
    dispatch(toggleLike(songId));
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="row">
        {searchResults.map((song) => (
          <div key={song.id} className="col text-center">
            {song.album?.cover_medium && <img className="img-fluid" src={song.album.cover_medium} alt="track" />}
            <p>
              Track: "{song.title}"<br />
              Artist: {song.artist?.name}
            </p>
            <button onClick={() => handleSongClick(song)}>Play</button>
            <button onClick={() => handleLikeToggle(song.id)}>{likedSongs.includes(song.id) ? "Unlike" : "Like"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
 */
