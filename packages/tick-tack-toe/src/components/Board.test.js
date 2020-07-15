import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Board } from './Board';
import * as http from '../http/tickTackToeService';

describe('<Board />', () => {
  it('should allow to complete the game', async () => {
    const onShowScoreBoardChange = jest.fn();
    http.addGame = jest.fn().mockResolvedValueOnce({ status: 201 });

    const { getAllByTestId, getByText, container } = render(
      <Board
        player1="p1"
        player2="p2"
        onShowScoreBoardChange={onShowScoreBoardChange}
      />
    );

    expect(getByText(/next player: p1/i)).toBeDefined();
    expect(container).toMatchSnapshot();

    const squares = getAllByTestId('square');
    fireEvent.click(squares[0]);
    expect(getByText(/next player: p2/i)).toBeDefined();
    expect(getByText('X')).toBeDefined();
    fireEvent.click(squares[1]);
    expect(getByText('O')).toBeDefined();
    fireEvent.click(squares[4]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[8]);

    expect(getByText(/winner: p1/i));

    await wait(() => {
      expect(onShowScoreBoardChange).toHaveBeenCalled();
      expect(onShowScoreBoardChange).toHaveBeenCalledTimes(1);
      expect(onShowScoreBoardChange).toHaveBeenCalledWith(true);
    });
  });
});
