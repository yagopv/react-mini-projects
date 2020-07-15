import React from 'react';

const Panel = props => {
  return (
    <div className="panel">
      <input
        type="checkbox"
        checked={props.dateOn}
        onChange={props.toggleDate}
      />
      <span>Calendar</span>
    </div>
  );
};

export default Panel;
