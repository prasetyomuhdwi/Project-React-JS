import { LOAD_PODOMOROS_SUCCESS, SET_PODOMOROS } from "../actions/podomoros";

const initialState = {
  allPodomoros: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PODOMOROS_SUCCESS:
      return { allPodomoros: action.payload, error: null };
    case SET_PODOMOROS:
      return { allPodomoros: action.payload, error: null };
    default:
      return state;
  }
};

export default reducer;
