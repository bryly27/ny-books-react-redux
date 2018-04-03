import axios from 'axios';

import {
  BOOKS,
  SELECT_BOOK,
  UNSELECT_BOOK
} from './types';

const key = 'b37059e7ffee4a0089b312ce3864ab5e';

function foobar(response) {
  return response;
}

function arrayToObject(response) {
  const bookMapper = {};
  
  response.forEach(function(list) {
    list.books.forEach(function(book) {
      if (!bookMapper[book.title]){
        bookMapper[book.title] = book;
      }
    })
  });

  return bookMapper;
}

function objectToArray(response) {
  return Object.keys(response).map(i => {
    return response[i];
  });
}


export function getBooks(category) {
  return function(dispatch) {
    if (category === 'bestsellers'){
      const url = `http://api.nytimes.com/svc/books/v3/lists/overview.jsonp?callback=foobar&api-key=${key}`;
      axios.get(url)
        .then(response => {
          const books = eval(response.data);
          const booksMapper = arrayToObject(books.results.lists);
          const booksArray = objectToArray(booksMapper);
          dispatch({ type: BOOKS, payload: {books: books.results.lists, booksMapper, booksArray } });
        })
        .catch(() => {
          console.error('Error for the api');
        });
    }
  }
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  };
}

export function unselectBook() {
  return {
    type: UNSELECT_BOOK
  }
}