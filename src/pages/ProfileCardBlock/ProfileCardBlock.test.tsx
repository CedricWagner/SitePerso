import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileCardBlock from './ProfileCardBlock';

describe('<ProfileCardBlock />', () => {
  test('it should mount', () => {
    render(<ProfileCardBlock />);
    
    const profileCardBlock = screen.getByTestId('ProfileCardBlock');

    expect(profileCardBlock).toBeInTheDocument();
  });
});