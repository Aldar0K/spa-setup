import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('Button', () => {
  test('to be rendered', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('to be clear', () => {
    render(<Button theme='clear'>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
