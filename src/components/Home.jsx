import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, likeSong } from "../redux/actions";
import AlbumCard from "../components/AlbumCard";
import MusicPlayer from "../components/MusicPlayer";
/* import SearchResults from "../components/SearchResults"; */

const Home = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.music.searchResults);
  const likedSongs = useSelector((state) => state.music.likedSongs);

  useEffect(() => {
    dispatch(fetchSongs("queen"));
    dispatch(fetchSongs("katyperry"));
    dispatch(fetchSongs("eminem"));
  }, [dispatch]);

  const handleLike = (songId) => {
    dispatch(likeSong(songId));
  };

  return (
    <div>
      <h1>Music App</h1>
      {/*   <SearchResults /> */}
      <div className="row">
        {searchResults.map((song) => (
          <AlbumCard key={song.id} song={song} onLike={handleLike} isLiked={likedSongs.some((likedSong) => likedSong.id === song.id)} />
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Home;
