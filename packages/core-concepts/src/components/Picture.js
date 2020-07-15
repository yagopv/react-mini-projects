import React from 'react';

export const Picture = props => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  );
};
