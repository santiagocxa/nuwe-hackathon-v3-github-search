import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock'
import { createMemoryHistory } from 'history';
import Login from '../../components/Login';


describe('Test <Login/>', () => {
  let component
  let setForm = jest.fn();
 
  beforeEach(()=> {
    const memoryHistory = createMemoryHistory();
    memoryHistory.push('/');
    component = render(
      <ProviderMock>
        <Login history={memoryHistory} submit={setForm} />
      </ProviderMock>
    );
  })
  test('Render component', () => {
    
    expect(component.getByText(/login/i)).toBeInTheDocument();
  });

  test('Button submit On', () => {
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation((form) => [form, setForm]);
    const button = component.getByText('Login');
    fireEvent.click(button);
    expect(setForm).toBeTruthy();
  });
});
