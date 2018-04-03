import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './Modal.css';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDom.render(
      <div className="book-modal">
        <div className="modal-content">
          <div className="title">
            <h2>{this.props.book.title}</h2>
          </div>
          <div className="body">
            <img src={this.props.book.book_image} className="image" alt="" />
            <div className="text">
              <p className="author">{this.props.book.author}</p>
              <p className="description">{this.props.book.description}</p>
            </div>
          </div>
          <div className="footer">
            <button className="close-modal" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />
  }
}

export { Modal };