import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

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
