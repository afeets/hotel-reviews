import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

/* 
test('The Navbar Component should render', () => {
  expect( 1 + 2 ).toBe(3);
}); 

test('The Navbar Component should render', () => {
  const view = render(<NavBar />);
  expect (view).toMatchSnapshot();
});
*/

test('The Navbar Component should render with a Title', () => {
  const title = 'Test Application'
  
  render(<NavBar title={ title } />);
  expect (screen.getByRole('heading')).toHaveTextContent(title);
});

test('The Navbar Component should respond to button clicks', () => {
  const mockFunction = jest.fn();
  render(<NavBar goBack={mockFunction} />);
  fireEvent.click(screen.getByText('< Go Back'));
  expect (mockFunction).toHaveBeenCalled();
});

test('The Navbar Component should open form', () => {
  const mockFunction = jest.fn();
  render(<NavBar goBack={mockFunction} openForm={mockFunction} />);
  fireEvent.click(screen.getByText('+ Add Review'));
  expect (mockFunction).toHaveBeenCalled();
});