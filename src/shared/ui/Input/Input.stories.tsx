import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Input } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {
        placeholder: "placeholder",
        value: "value",
      },
    }),
  ],
};

export const ThemeDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        placeholder: "placeholder",
        value: "value",
      },
    }),
  ],
};
