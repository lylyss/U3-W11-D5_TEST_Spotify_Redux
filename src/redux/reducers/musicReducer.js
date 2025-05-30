import { SET_CURRENT_SONG, TOGGLE_LIKE_SONG } from "../actions/actionTypes";

const initialState = {
  currentSong: null,
  likedSongs: [],
  searchResults: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case TOGGLE_LIKE_SONG: {
      const isLiked = state.likedSongs.includes(action.payload);
      return {
        ...state,
        likedSongs: isLiked ? state.likedSongs.filter((id) => id !== action.payload) : [...state.likedSongs, action.payload],
      };
    }
    default:
      return state;
  }
};

export default musicReducer;
