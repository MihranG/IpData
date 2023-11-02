// @ts-nocheck
// todo fix the types
import { render, fireEvent, screen } from '@testing-library/react';
import InputForm from './InputForm';
import { IpDataContext } from '../contexts/IpDataContext.tsx';

const mockSetIpData = jest.fn();

export const customRender = (
  ui,
  data: null | NonNullable<unknown> = null,
  options = {},
) => {
  const Wrapper = ({ children }) => (
    <IpDataContext.Provider value={{ ipData: data, setIpData: mockSetIpData }}>
      {children}
    </IpDataContext.Provider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

test('InputForm handles input change', () => {
  customRender(<InputForm />);

  const inputElement = screen.getByPlaceholderText('Enter an IP address');
  fireEvent.change(inputElement, { target: { value: '192.168.0.1' } });

  expect(inputElement.value).toBe('192.168.0.1');
});

test('InputForm fetches data on button click', () => {
  const mockFetchIpData = jest.spyOn(require('../api/api.ts'), 'fetchIPInfo'); // Get the mocked fetchIpData

  customRender(<InputForm />);
  const inputElement = screen.getByPlaceholderText('Enter an IP address');
  fireEvent.change(inputElement, { target: { value: '192.168.0.1' } });
  const buttonElement = screen.getByText('➤');
  fireEvent.click(buttonElement);

  expect(mockFetchIpData).toHaveBeenCalledWith('192.168.0.1');
  // You can further test the behavior based on the API response and mockSetIpData function.
});
