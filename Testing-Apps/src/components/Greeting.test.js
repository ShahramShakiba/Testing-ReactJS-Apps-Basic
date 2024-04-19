import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  // test(description: what your test does, fn: testing codes )
  test('renders "Hello World" as a text', () => {
    // Arrange: set up test data
    render(<Greeting />);

    // Act: run logic that should be tested
    // ...

    // Assert: compare execution results with expected results
    const helloWorldEl = screen.getByText('Hello World', { exact: false });

    expect(helloWorldEl).toBeInTheDocument(); // toBeInTheDocument() is a matcher
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const greetingSentence = screen.getByText('good to see you', {
      exact: false,
    });
    expect(greetingSentence).toBeInTheDocument();
  });

  test('renders "changes was successful" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const outputEl = screen.getByText('changes was successful', {
      exact: false,
    });
    expect(outputEl).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const outputEl = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputEl).toBeNull();
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

/* userEvent
-  is a utility function provided by the Testing Library for React that allows developers to simulate user interactions with the components in their applications during testing. 

- This function is particularly useful for writing integration tests that closely mimic how real users would interact with the UI elements.
*/

/* queryByText
- if my expectation is that an element NOT be found in the document and "getByText" will throw an error if it's not found, this test could never pass

- but queryByText will return "null" if the element is NOT found
*/
