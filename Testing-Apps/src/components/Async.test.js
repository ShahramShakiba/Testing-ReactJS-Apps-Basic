import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
  test('should renders posts if request succeeds.', async () => {
    render(<Async />);

    const listItem = await screen.findAllByRole('listitem');
    expect(listItem).not.toHaveLength(0);
  });
});
