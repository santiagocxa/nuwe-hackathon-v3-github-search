import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe ('<Header/>', ()=> {
  
  const components = render(<Header/>);
  
  test('Render Header', () => {
    components.getByText('GitHub User')
  });

})