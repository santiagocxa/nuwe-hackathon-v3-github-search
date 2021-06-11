import React from 'react';
import { render, screen } from '@testing-library/react';
import Repos from '../../components/Repos';
import { getData } from '../../assets/utils/getData';

jest.mock('../../assets/utils/getData', () => ({
  getData: jest.fn(),
}));

describe('Test <Repos/>', () => {
  test('Render content', async () => {
    getData.mockReturnValueOnce([
      {
        id: '1',
        name: 'test',
        language: 'js',
        description: 'description test',
      },
    ]);
    render(<Repos />);

    await screen.findByTitle('prueba');
    expect(screen.getByText(/description test/i)).toBeInTheDocument();
  });
});
