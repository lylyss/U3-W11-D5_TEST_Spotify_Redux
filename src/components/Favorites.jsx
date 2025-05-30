import React from "react";
import { useSelector } from "react-redux";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.music.favorites);

  return (
    <div>
      <h2>Favorites List</h2>
      {favorites.length === 0 ? (
        <p>No favorite songs added yet.</p>
      ) : (
        <ul>
          {favorites.map((song) => (
            <li key={song.id}>
              <img src={song.album.cover_medium} alt={song.title} />
              <p>
                Track: "{song.title}"<br />
                Artist: {song.artist.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
