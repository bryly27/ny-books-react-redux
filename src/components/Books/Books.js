import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book_actions';

import { 
  Header,
  Categories,
  Booklist,
  SearchInput,
  Modal
} from '../shared/index';

class Bestsellers extends Component {
  constructor(props) {
    super(props);

    this.props.getBooks('bestsellers');

    this.state = {
      search: ''
    };
  }

  renderBooklist() {
    
    if (this.state.search === '') {
      return this.props.books.books.map(book => {
        return (
          <Booklist 
            key={book.list_id}
            title={book.display_name}
            books={book.books} />
        );
      });
      
    } else {

      const list = [{
        display_name: 'Search Results',
        books: []
      }];
  
      list[0].books = this.props.books.booksArray.filter(book => {
        return book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });

      return list.map(book => {
        return (
          <Booklist 
            key={book.display_name}
            title={book.display_name}
            books={book.books} />
        );
      });
    }
  }

  searchBooks = (term) => {
    this.setState({ search: term }); 
  }

  renderModal() {
    if (this.props.selectedBook) {
      return (
        <Modal 
          closeModal={this.props.unselectBook}
          book={this.props.selectedBook} />
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Categories 
          onCategorySelect={this.props.getBooks}/>
        <SearchInput onSearch={this.searchBooks} />
        {this.renderBooklist()}
        {this.renderModal()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps, actions)(Bestsellers);