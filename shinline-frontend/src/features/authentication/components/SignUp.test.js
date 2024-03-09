// SignUp.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import SignUp from './SignUp';

test('it shows 6 inputs and a button', () => {
  // render the component
  render(<SignUp />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(6);
  expect(button).toBeInTheDocument();

  // expect(screen.getByLabelText(/Login/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/FIO/i)).toBeInTheDocument();
  // Add more assertions for other form elements
});

test('it calls onSave when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION
  // const argList = [];
  // const callback = (...args) => {
  //   argList.push(args);
  // };
  const mock = jest.fn();
  // Try to render my component
  render(<SignUp onSave={mock} />);
  // Find the two inputs
  // const [loginInput, emailInput] = screen.getAllByRole('textbox');
  const loginInput = screen.getByRole('textbox', {
    name: /login/i, // ? RegEx /i about lowercase
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(loginInput);
  user.keyboard('jahongir');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('j@gmail.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'handleSave' gets called with login/email/fio/...
  expect(mock).toHaveBeenCalled();
  expect(mock).toEqual({ login: 'jahongir', email: 'j@gmail.com' });
});

// test('should handle form submission', async () => {
//   render(<SignUp />);

//   // Simulate user input
//   userEvent.type(screen.getByLabelText(/Login/i), 'testUser');
//   userEvent.type(screen.getByLabelText(/FIO/i), 'Test Full Name');
//   // Add more user input for other form elements

//   // Trigger form submission
//   fireEvent.click(screen.getByText(/Sign In/i));

//   // Add assertions for the expected behavior after form submission
//   // For example, you can check if the handleSave method is called and form is cleared
//   await waitFor(() => {
//     expect(screen.getByLabelText(/Login/i)).toHaveValue('');
//     expect(screen.getByLabelText(/FIO/i)).toHaveValue('');
//     // Add more assertions for other form elements
//   });

//   // Add assertions for any expected side effects or API calls
// });
// function expect(arg0) {
//   throw new Error('Function not implemented.');
// }
