import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return { ...state, fetching: true }
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      }
    case FETCHING_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: action.payload }
    default:
      return state;
  }
};
