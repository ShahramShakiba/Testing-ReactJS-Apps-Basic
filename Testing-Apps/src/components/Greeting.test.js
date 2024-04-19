import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('<Greeting />', () => {
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
});

/* matchers
- a matcher function to define the assertion condition, leading to the error message "Expect must have a corresponding matcher call."
*/

/* Test Suites & Tests & describe
* Test Suites: A test suite is a collection of individual test cases or test files that are grouped together based on a common functionality or feature.
  - a test suite could include tests for components, functions, or specific features within the application.


* Tests: on the other hand, refer to individual units of code that are written to verify the behavior or functionality of a specific part of the application.


* describe: It is used to group together related test cases, providing a way to organize and structure your tests in a logical manner. By using `describe()`, you can create nested test suites that help improve readability and maintainability of your test code.
*/
