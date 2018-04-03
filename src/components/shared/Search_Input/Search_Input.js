import React, { Component } from 'react';

import './Search_Input.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  onSearchChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearch(searchTerm);
  }

  render() {
    return (
      <div className="search">
        <input 
          type="text" 
          className="input" 
          placeholder="Search title" 
          onChange={event => this.onSearchChange(event.target.value)}
          value={this.state.searchTerm}/> 
      </div>
    );
  }
}

export { SearchInput };


