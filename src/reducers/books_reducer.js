import {
  BOOKS
} from '../actions/types';

const INITIAL_STATE = {
  books: [],
  booksMapper: {},
  booksArray: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOOKS:
    const { books, booksMapper, booksArray } = action.payload;
      return { ...state, books, booksMapper, booksArray };
    default:
      return state;
  }
}