import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/book_actions';
import './Book_Item.scss';

class BookItem extends Component {
  constructor(props) {
    super(props);
  }

  onSelectBook() {
    this.props.selectBook(this.props.book);
  }

  render() {
    return (
      <div className="book col-2" onClick={this.onSelectBook.bind(this)}>
        <img className="image" src={this.props.book.book_image} alt="" />
        <p className="title">
          {this.props.book.title}
        </p>
        <p className="author">
          By {this.props.book.author}
        </p>
      </div>
    );
  }
}

export default connect(null, actions)(BookItem);