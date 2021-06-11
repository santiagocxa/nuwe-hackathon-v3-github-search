import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProviderMock from '../../__mocks__/ProviderMock'
import Repo from '../../components/Repo';


describe('Test <Header/>', () => {
  const item = {
    id:'',
    name:'',
    language:'',
    description: ''
  }
  test('Render content', () => {
    render(
    <ProviderMock>
      <Repo item={item}/>
    </ProviderMock>
    )
    
    expect(screen.getByText(/languaje/i)).toBeInTheDocument();
  })
});
