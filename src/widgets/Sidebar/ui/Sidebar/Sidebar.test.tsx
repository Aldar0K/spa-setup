import { screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('to be rendered', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });
});
