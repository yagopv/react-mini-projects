import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <ul>
      <li>
        <Link to="/jsx">JSX</Link>
      </li>
      <li>
        <Link to="/props">Props</Link>
      </li>
      <li>
        <Link to="/state">State</Link>
      </li>
      <li>
        <Link to="/css-styling">CSS</Link>
      </li>
      <li>
        <Link to="/inline-styling">CSS Inline</Link>
      </li>
      <li>
        <Link to="/css-modules">CSS Modules</Link>
      </li>
      <li>
        <Link to="/fetch-data">Fetch Data</Link>
      </li>
      <li>
        <Link to="/classes">Class Components</Link>
      </li>
      <li>
        <Link to="/lifting">Lifting</Link>
      </li>
      <li>
        <Link to="/forms">Forms</Link>
      </li>
      <li>
        <Link to="/reducer">Reducer</Link>
      </li>
      <li>
        <Link to="/children">Children</Link>
      </li>
    </ul>
  );
}
