import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayWebsiteInfo from './DisplayWebsiteInfo';

describe('<DisplayWebsiteInfo />', () => {
  test('it should mount', () => {
    render(<DisplayWebsiteInfo />);
    
    const displayWebsiteInfo = screen.getByTestId('DisplayWebsiteInfo');

    expect(displayWebsiteInfo).toBeInTheDocument();
  });
});