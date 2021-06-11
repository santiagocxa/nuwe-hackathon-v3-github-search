import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock';
import User from '../../components/User';

describe('Test <User/>', () => {
  test('Render content', () => {
    render(
      <ProviderMock>
        <User />
      </ProviderMock>
    );

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test('Button test handleSubmit', () => {
    let component = render(
      <ProviderMock>
        <User />
      </ProviderMock>
    );
    const button = component.getByText(/search/i);
    fireEvent.click(button);
    expect(
      component.getByText(/usuario no econtrado/i)
    ).toBeInTheDocument();
  });

  test('Button test handleChange', () => {
    let component = render(
      <ProviderMock>
        <User />
      </ProviderMock>
    );
    const userNameInput = component.getByPlaceholderText(/user/i);
    expect(userNameInput.value).toMatch('');
    fireEvent.change(userNameInput, { target: { value: 'test' } });
    expect(userNameInput.value).toMatch('test');
  });
});
