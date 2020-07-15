import React from 'react';

function Panel({ isDateChecked, onDateCheckedChange }) {
  return (
    <div className="panel">
      <input
        type="checkbox"
        checked={isDateChecked}
        onChange={onDateCheckedChange}
      />
      <span>Calendar</span>
    </div>
  );
}

export { Panel };
