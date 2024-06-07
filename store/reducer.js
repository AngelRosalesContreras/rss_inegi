import { SET_NEWS } from './actions';

const initialState = {};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        [action.payload.feedUrl]: action.payload.news,
      };
    default:
      return state;
  }
};
