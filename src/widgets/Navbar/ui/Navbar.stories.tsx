import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

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
    StoreDecorator({
      user: {},
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {},
    }),
    StoreDecorator({
      user: {},
    }),
  ],
};

export const DarkWithAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {},
    }),
    StoreDecorator({
      user: { authData: { id: "1", username: "username" } },
    }),
  ],
};
