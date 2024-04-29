import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search transactions..."
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
