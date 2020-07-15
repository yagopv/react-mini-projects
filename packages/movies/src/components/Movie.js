import React from 'react';

const PLACEHOLDER = 'https://via.placeholder.com/150x250';

export function Movie({ Title, Poster, Type, Year }) {
  return (
    <div className="movie">
      <div
        className="movie-image"
        style={{
          backgroundImage: `url(${Poster !== 'N/A' ? Poster : PLACEHOLDER})`
        }}
      ></div>
      <div className="movie-info">
        <p>{Title}</p>
        <small>{Year}</small>
      </div>
    </div>
  );
}
