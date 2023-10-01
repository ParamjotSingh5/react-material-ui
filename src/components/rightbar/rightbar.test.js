import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rightbar from './Rightbar';

describe('<Rightbar />', () => {
  test('it should mount', () => {
    render(<Rightbar />);
    
    const rightbar = screen.getByTestId('Rightbar');

    expect(rightbar).toBeInTheDocument();
  });
});