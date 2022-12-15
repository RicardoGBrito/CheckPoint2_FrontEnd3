import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import Home from ''

test('should show login form', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

