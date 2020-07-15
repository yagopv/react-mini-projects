import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Game from './Game';
import { axe } from 'jest-axe';
import { addGame, getLatestGames } from './http/tickTackToeService';

jest.mock('./http/tickTackToeService.js');

describe('<Game />', () => {
  it('should show the dashboard after entering 2 players', () => {
    const { getByRole, getByText } = render(<Game />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'player1' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    fireEvent.change(input, { target: { value: 'player2' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(getByText(/next player: player1/i)).toBeDefined();
  });

  it('should allow to play the game', async () => {
    const { getByRole, getByText, getAllByTestId } = render(<Game />);

    addGame.mockResolvedValueOnce({ data: [] });
    getLatestGames.mockResolvedValueOnce({
      data: [
        {
          id: '11112222',
          createdAt: 1575110209,
          player1: 'player1',
          player2: 'player2',
          winner: 'player1',
          type: 'X'
        }
      ]
    });

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'player1' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    fireEvent.change(input, { target: { value: 'player2' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(getByText(/next player: player1/i)).toBeDefined();
    const squares = getAllByTestId('square');
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[8]);

    await wait(() => expect(getByText('11112222')).toBeDefined());
  });

  it.skip('should render accesible html', async () => {
    const { container, debug } = render(<Game />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
