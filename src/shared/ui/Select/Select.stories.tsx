import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Label",
    options: [
      {
        value: "1",
        content: "test option",
      },
      {
        value: "2",
        content: "test option 2",
      },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: meta.args,
    }),
  ],
};

export const DarkTheme: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: meta.args,
    }),
  ],
};
