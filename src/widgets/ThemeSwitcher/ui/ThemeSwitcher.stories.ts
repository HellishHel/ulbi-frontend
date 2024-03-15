import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {},
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {},
    }),
  ],
};
