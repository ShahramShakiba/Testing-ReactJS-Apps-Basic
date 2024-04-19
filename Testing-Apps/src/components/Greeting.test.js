import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// test(description: what your test does, fn: testing codes )
test('renders Hello World as a text', () => {
  // Arrange: set up test data
  render(<Greeting />);

  // Act: run logic that should be tested
  // ...

  // Assert: compare execution results with expected results
  const helloWorldEl = screen.getByText('Hello World', { exact: false });

  expect(helloWorldEl).toBeInTheDocument(); // toBeInTheDocument() is a matcher
});

/* matchers
- a matcher function to define the assertion condition, leading to the error message "Expect must have a corresponding matcher call."
*/
