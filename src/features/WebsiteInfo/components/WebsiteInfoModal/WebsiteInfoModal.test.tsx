import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WebsiteInfoModal from './WebsiteInfoModal';

describe('<WebsiteInfoModal />', () => {
  test('it should mount', () => {
    render(<WebsiteInfoModal />);
    
    const websiteInfoModal = screen.getByTestId('WebsiteInfoModal');

    expect(websiteInfoModal).toBeInTheDocument();
  });
});