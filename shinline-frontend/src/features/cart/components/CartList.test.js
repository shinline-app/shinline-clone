import { render, screen } from '@testing-library/react';
import CartList from './CartList';

test('render one row per item', () => {
  // Render the component
  const cart = [{}];
  render(<CartList cart={cart} />);

  // Find all the rows in the table
  screen.logTestingPlaygroundURL();

  // Assertion: correct number of rows in the table
});
