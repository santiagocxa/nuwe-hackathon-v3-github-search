import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock'
import Profile from '../../components/Profile';


describe('Test <Header/>', () => {
  test('Render content', () => {
    render(
    <ProviderMock>
      <Profile/>
    </ProviderMock>
    )
    expect(screen.getByText(/web site/i)).toBeInTheDocument();
  })
});