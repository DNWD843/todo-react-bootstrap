import React, { useState } from 'react';
import './SearchPanel.css';

export const SearchPanel = ({ handleSearchInputChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputchange = (evt) => {
    const { value } = evt.target;
    setSearchValue(value);
    handleSearchInputChange(value);
  };

  return (
    <input
      name="search"
      onChange={handleInputchange}
      value={searchValue}
      className="form-control search-input"
      placeholder="Type to search..."
    />
  );
};
