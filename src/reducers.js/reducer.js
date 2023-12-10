const initialState = {
  favorites: [],
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favIndex) => favIndex !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
