import { FILTER_OFF, FILTER_ON } from "./types";

const initialState = {
  filter: true,
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ON: {
      return { ...state, filter: true };
    }
    case FILTER_OFF: {
      return { ...state, filter: false };
    }
    default:
      return state;
  }
};
