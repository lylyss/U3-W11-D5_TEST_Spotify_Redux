import { FETCH_SONGS, SET_CURRENT_SONG, LIKE_SONG } from "../actions/actionTypes";

const initialState = {
  rockSongs: [],
  popSongs: [],
  hipHopSongs: [],
  likedSongs: [],
  currentSong: null,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        [action.payload.genre]: action.payload.songs, // Salva le canzoni nella categoria corretta
      };
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.includes(action.payload)
          ? state.likedSongs.filter((id) => id !== action.payload)
          : [...state.likedSongs, action.payload],
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

export default musicReducer;
