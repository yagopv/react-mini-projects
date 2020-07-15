import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Square } from './Square';

describe('<Square />', () => {
  it('should show the value marked - X, Y or no value', () => {
    const { getByRole, rerender } = render(<Square value={'X'} />);
    expect(getByRole('button')).toHaveTextContent('X');
    rerender(<Square value={'Y'} />);
    expect(getByRole('button')).toHaveTextContent('Y');
    rerender(<Square />);
    expect(getByRole('button')).toHaveTextContent('');
  });

  it('should tell the parent it was clicked', () => {
    const fn = jest.fn();
    const { getByRole } = render(<Square onChangeSquare={fn} />);
    expect(getByRole('button')).toBeDefined();
    fireEvent.click(getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
});
