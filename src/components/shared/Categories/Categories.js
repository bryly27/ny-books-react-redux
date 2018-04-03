import React from 'react';

import './Categories.scss';

const Categories = ({ onCategorySelect }) => {

  return (
    <div className="categories">
      <h3 className="categories-title">Categories</h3>
      <div className="category col-2" onClick={() => onCategorySelect('bestsellers')}>
        <i className="far fa-star icon"></i>
        <p className="title">Bestsellers</p>
      </div>
    </div>
  );
}

export { Categories };