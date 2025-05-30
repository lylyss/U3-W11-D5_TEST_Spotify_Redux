import React from "react";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <div className="music-player">
      {currentSong ? (
        <>
          <h2>Now Playing</h2>
          <img src={currentSong.album.cover_medium} alt={currentSong.title} />
          <p>Track: "{currentSong.title}"</p>
          <p>Artist: {currentSong.artist.name}</p>
          <audio controls>
            <source src={currentSong.preview} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
};

export default MusicPlayer;
