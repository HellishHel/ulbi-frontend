import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Button, ButtonSize, ButtonTheme } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        children: "Button",
      },
    }),
  ],
};

export const Clear: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const OutlinedSizeM: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};

export const OutlinedSizeL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
    disabled: true,
  },
};

export const SquareM: Story = {
  args: {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
  },
};
