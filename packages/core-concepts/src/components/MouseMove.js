import React, { useState } from 'react';

export function MouseMove({ children }) {
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ backgroundColor: '#ccc', width: '200px', height: '200px' }}
      onMouseMove={e => setCoord({ x: e.clientX, y: e.clientY })}
    >
      {children(coord)}
    </div>
  );
}
