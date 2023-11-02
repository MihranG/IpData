import Card from './Card.tsx';
import { customRender } from './InputForm.test.tsx';

test('renders a section title', () => {
  const { getByText } = customRender(<Card />);
  const titleElement = getByText(/Ip address/i);
  expect(titleElement).toBeDefined();
});
