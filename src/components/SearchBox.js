import React from "react";

const SearchBox = ({ onKeyPress }) => {
  return (
    <div className="pa2">
      <input
        onChange={onKeyPress}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name="searchbox"
        id="searchbox"
        placeholder="search for a robot"
      />
    </div>
  )
};

export default SearchBox;
