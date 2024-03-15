import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Navbar } from "./Navbar";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

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
