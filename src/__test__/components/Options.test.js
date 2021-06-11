import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock  from '../../__mocks__/ProviderMock'
import Options from '../../components/Options';

describe('Test <Options/>', () => {
  test('Render component', () => {
    render(
      <ProviderMock>
        <Options />
      </ProviderMock>
    );

    expect(screen.getByText(/search user/i)).toBeInTheDocument();
  });

});
