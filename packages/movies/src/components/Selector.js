import React, { useCallback } from 'react';

export function Selector({ selected, onOptionChange }) {
  const handleOptionChange = useCallback(
    event => {
      onOptionChange(event.target.value);
    },
    [onOptionChange]
  );

  return (
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
  );
}

function RadioButton({ type, value, onChange, children }) {
  return (
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
  );
}
