import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Button, ButtonThemes } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLight: Story = {
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const DefaultDark: Story = {
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const ClearLight: Story = {
  args: {
    theme: ButtonThemes.CLEAR,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const ClearDark: Story = {
  args: {
    theme: ButtonThemes.CLEAR,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const OutlineLight: Story = {
  args: {
    theme: ButtonThemes.OUTLINE,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonThemes.OUTLINE,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};
