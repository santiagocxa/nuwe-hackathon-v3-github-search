import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock'
import Search from '../../components/Search';


describe('Test <Header/>', () => {
  const data = {
    className:'',
    nameButton:''
  }
  test('Render content', () => {
    render(
    <ProviderMock>
      <Search data={data}/>
    </ProviderMock>
    )
    
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  })
});