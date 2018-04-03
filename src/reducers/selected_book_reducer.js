import {
  SELECT_BOOK,
  UNSELECT_BOOK
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload;
    case UNSELECT_BOOK: 
      return null;
    default:
      return state;
  }
}