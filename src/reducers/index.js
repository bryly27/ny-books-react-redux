import { combineReducers } from 'redux';
import books from './books_reducer';
import selectedBook from './selected_book_reducer';

const rootReducer = combineReducers({
  books,
  selectedBook
});

export default rootReducer;