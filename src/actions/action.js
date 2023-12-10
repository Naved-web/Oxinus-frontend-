

// Action types
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action creators
export const addToFavorites = (index) => ({
  type: ADD_TO_FAVORITES,
  payload: index,
});

export const removeFromFavorites = (index) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: index,
});
