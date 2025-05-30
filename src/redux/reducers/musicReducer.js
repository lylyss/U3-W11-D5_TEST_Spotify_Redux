import { FETCH_SONGS, SET_CURRENT_SONG, TOGGLE_LIKE_SONG } from "../actions/actionTypes";

const initialState = {
  popSongs: [],
  rockSongs: [],
  hipHopSongs: [],
  likedSongs: [],
  currentSong: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SONGS":
      return {
        ...state,
        [action.payload.category]: action.payload.songs,
      };
    case "LIKE_SONG":
      return {
        ...state,
        likedSongs: state.likedSongs.includes(action.payload) ? state.likedSongs.filter((id) => id !== action.payload) : [...state.likedSongs, action.payload],
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
