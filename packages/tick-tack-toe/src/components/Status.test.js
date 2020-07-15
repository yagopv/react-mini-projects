import React from 'react';
import { render } from '@testing-library/react';
import { Status } from './Status';

describe('<Status />', () => {
  it('should show a tie if the number of rounds is 9 and there is no winner', () => {
    const { getByTestId } = render(<Status rounds={9} />);
    expect(getByTestId('status')).toHaveTextContent('Tie');
  });

  it('should show next player', () => {
    const { getByTestId } = render(
      <Status rounds={3} winner={null} next={'Player'} />
    );
    expect(getByTestId('status')).toHaveTextContent('Next player: Player');
  });

  it('should show the winner', () => {
    const { getByTestId } = render(
      <Status rounds={3} winner={'Player'} next={'Player'} />
    );
    expect(getByTestId('status')).toHaveTextContent('Winner: Player');
  });
});
