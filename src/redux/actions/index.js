import { FETCH_SONGS, LIKE_SONG, SET_CURRENT_SONG } from "./actionTypes";

export const fetchSongs = (query, genre) => async (dispatch) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    if (!response.ok) throw new Error("Failed to fetch songs");
    const data = await response.json();

    dispatch({
      type: FETCH_SONGS,
      payload: {
        genre,
        songs: data.data,
      },
    });
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
};

export const likeSong = (songId) => ({
  type: LIKE_SONG,
  payload: songId,
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

const initialState = {
  songs: [],
  currentSong: null,
  likedSongs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      console.log("FETCH_SONGS payload:", action.payload);
      return {
        ...state,
        songs: action.payload.songs,
      };
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.includes(action.payload) ? state.likedSongs.filter((id) => id !== action.payload) : [...state.likedSongs, action.payload],
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
