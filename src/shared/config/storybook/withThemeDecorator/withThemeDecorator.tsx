import { Decorator } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';

export const withThemeDecorator = (theme: AppThemes): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story/>
  </div>
);
