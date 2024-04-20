import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
  test('should renders posts if request succeeds.', async () => {
    window.fetch = jest.fn();
    // set a value which this fetch fn should resolve to when it's being called
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    const listItem = await screen.findAllByRole('listitem');
    expect(listItem).not.toHaveLength(0);
  });
});

/* Jest - mock function

* Jest :
  -  It provides a robust set of features for writing and running tests, including support for mocking functions and modules, asserting expectations, and generating code coverage reports. 
  
  - Jest simplifies the testing process by offering an intuitive API and seamless integration with React components.


* mock function:
  - Mock functions are placeholders for real functions that simulate their behavior during testing. 
  
  - By using mock functions, you can isolate the code under test and control its interactions with external dependencies, ensuring that your tests focus on specific functionality without relying on actual implementations.

*/
