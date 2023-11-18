import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('to be rendered', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('to be able to collapse', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('button-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
  });
});
