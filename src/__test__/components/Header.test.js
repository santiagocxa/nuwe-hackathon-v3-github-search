import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Test <Header/>', () => {
  test('Render content', async () => {
    render(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    );
    expect(screen.getByText(/GitHub User/)).toBeInTheDocument();
    expect(await screen.findByText(/user test/i)).toBeInTheDocument();
  });
});
