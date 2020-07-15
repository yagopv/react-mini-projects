import React, { useState, useEffect } from 'react';
import { Selector } from './components/Selector';
import { Search } from './components/Search';
import { getMoviesByTitle } from './services/movieService';
import { Movie } from './components/Movie';

export function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('movie');

  useEffect(() => {
    async function getMovies(t) {
      const {
        data: { Search, Error }
      } = await getMoviesByTitle(t, selected);
      if (Error) {
        setMovies([]);
      } else {
        setMovies(Search);
      }
    }

    if (title) {
      getMovies(title, selected);
    }
  }, [title, selected]);

  return (
    <main>
      <aside>
        <Search
          text={search}
          onSearchTextChange={searchText => setSearch(searchText)}
          onSearchButtonClick={() => setTitle(search)}
        />
        {/*
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
        */}
        <hr />
        <Selector
          selected={selected}
          onOptionChange={option => setSelected(option)}
        />
        {/* 
        <React.Fragment>
          <RadioButton type="movie" onChange={handleOptionChange} value={selected}>
            Movies
          </RadioButton>
          <RadioButton type="series" onChange={handleOptionChange} value={selected}>
            TV Shows
          </RadioButton>
          <RadioButton
            type="episode"
            onChange={handleOptionChange}
            value={selected}
          >
            Episodes
          </RadioButton>
        </React.Fragment>

        <div className="radio">
          <label>
            <input
              type="radio"
              value={type}
              checked={value === type}
              onChange={onChange}
            />
            <span className={value === type ? 'selected' : null}>{children}</span>
          </label>
        </div>
        */}
      </aside>
      <section id="content">
        {movies.map((movie, index) => (
          <Movie key={movie.imdbID} {...movie} />
          // <div className="movie">
          //   <div
          //     className="movie-image"
          //     style={{
          //       backgroundImage: `url(${Poster !== 'N/A' ? Poster : PLACEHOLDER})`
          //     }}
          //   ></div>
          //   <div className="movie-info">
          //     <p>{Title}</p>
          //     <small>{Year}</small>
          //   </div>
          // </div>
        ))}
      </section>
    </main>
  );
}
