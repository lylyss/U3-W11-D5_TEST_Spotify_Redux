import React from "react";
import { useSelector } from "react-redux";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  const favoriteSongs = useSelector((state) => state.music.favoriteSongs);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Songs</h1>
      {favoriteSongs.length > 0 ? <FavoritesList songs={favoriteSongs} /> : <p>No favorite songs added yet.</p>}
    </div>
  );
};

export default Favorites;
