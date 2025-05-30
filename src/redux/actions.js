export const fetchSongs = (query, category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "SET_SONGS",
          payload: { songs: data.data, category },
        });
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };
};
