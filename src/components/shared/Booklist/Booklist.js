import React from 'react';

import './Booklist.css';

import BookItem from './../Book_Item/Book_Item';


const Booklist = ({ title, books }) => {
  const bookItems = books.map(book => {
    return (
      <BookItem 
        key={book.title}
        book={book} />
    );
  })

  return (
    <div className="books">
      <div className="book-list">
        <h4 className="book-list-title">
          {title}
        </h4>
        {bookItems}
      </div>
    </div>
  );
}

export { Booklist };