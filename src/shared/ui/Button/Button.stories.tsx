import type { Meta, StoryObj } from '@storybook/react';

import { AppThemes } from 'app/providers/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Button, ButtonSizes, ButtonThemes } from './Button';

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

export const BackgroundLight: Story = {
  args: {
    theme: ButtonThemes.BACKGROUND,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const BackgroundDark: Story = {
  args: {
    theme: ButtonThemes.BACKGROUND,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const BackgroundInvertedLight: Story = {
  args: {
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareLight: Story = {
  args: {
    square: true,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareDark: Story = {
  args: {
    square: true,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeSmallLight: Story = {
  args: {
    square: true,
    size: ButtonSizes.S,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeSmallDark: Story = {
  args: {
    square: true,
    size: ButtonSizes.S,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeMediumLight: Story = {
  args: {
    square: true,
    size: ButtonSizes.M,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeMediumDark: Story = {
  args: {
    square: true,
    size: ButtonSizes.M,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};

export const SquareSizeLargeLight: Story = {
  args: {
    square: true,
    size: ButtonSizes.L,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.LIGHT)],
};

export const SquareSizeLargeDark: Story = {
  args: {
    square: true,
    size: ButtonSizes.L,
    theme: ButtonThemes.BACKGROUND_INVERTED,
  },
  decorators: [withThemeDecorator(AppThemes.DARK)],
};
