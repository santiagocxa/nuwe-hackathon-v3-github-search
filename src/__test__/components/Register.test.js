import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock';
import { createMemoryHistory } from 'history';
import Register from '../../components/Register';

describe('Test <Register/>', () => {
  let component;

  beforeEach(() => {
    const memoryHistory = createMemoryHistory();
    memoryHistory.push('/User');
    component = render(
      <ProviderMock>
        <Register history={memoryHistory} />
      </ProviderMock>
    );
  });

  test('Render component', () => {
    expect(
      component.getByPlaceholderText('User Name')
    ).toBeInTheDocument();
  });

  test('Button test handleChange', () => {
    const userNameInput =
      component.getByPlaceholderText(/user name/i);
    expect(userNameInput.value).toMatch('');
    fireEvent.change(userNameInput, { target: { value: 'test' } });
    expect(userNameInput.value).toMatch('test');
  });

  test('Button test handleSubmit', () => {
    const button = component.getByText(/register/i);
    fireEvent.click(button);
    expect(component.getByText(/Login OK/i)).toBeInTheDocument();
  });
});
