import React, { useCallback } from 'react';

export function Search({ search, onSearchTextChange, onSearchButtonClick }) {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Searching for ?"
        value={search}
        onChange={useCallback(event => onSearchTextChange(event.target.value), [
          onSearchTextChange
        ])}
      ></input>
      <button onClick={onSearchButtonClick}>Search</button>
    </React.Fragment>
  );
}
