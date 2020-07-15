import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Players } from './Players';

describe('<Players />', () => {
  it('should allow to enter players', () => {
    const fn = jest.fn();
    const { getByRole } = render(<Players onPlayersChanged={fn} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'player1' } });
    expect(input.value).toBe('player1');
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(input.value).toBe('');
    expect(input.placeholder).toBe('Enter player 2');
    expect(fn).toHaveBeenCalledWith('player1');
  });
});
