import { FETCH_SONGS, LIKE_SONG, SAVE_SEARCH_RESULTS, SET_CURRENT_SONG, TOGGLE_LIKE_SONG } from "./actionTypes";

// Azione per fetchare le canzoni
export const fetchSongs = (artistName) => async (dispatch) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: FETCH_SONGS, payload: data });
    } else {
      throw new Error("Error fetching songs");
    }
  } catch (error) {
    console.error(error);
  }
};

// Azione per mettere "mi piace" a una canzone
export const likeSong = (songId) => {
  return {
    type: LIKE_SONG,
    payload: songId,
  };
};

// Azione per salvare i risultati della ricerca
export const saveSearchResults = (results) => {
  return {
    type: SAVE_SEARCH_RESULTS,
    payload: results,
  };
};

// Azione per impostare la canzone corrente
export const setCurrentSong = (song) => {
  return {
    type: SET_CURRENT_SONG,
    payload: song,
  };
};

// Azione per alternare il "mi piace" su una canzone
export const toggleLikeSong = (songId) => {
  return {
    type: TOGGLE_LIKE_SONG,
    payload: songId,
  };
};
