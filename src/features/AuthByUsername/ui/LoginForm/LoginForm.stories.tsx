import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

import LoginForm from "./LoginForm";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {},
    }),
    StoreDecorator({
      loginForm: { username: "user", password: "123" },
    }),
  ],
};

export const ThemeDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {},
    }),
    StoreDecorator({
      loginForm: { username: "user", password: "123" },
    }),
  ],
};

export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: "user", password: "123", error: "Error" },
    }),
  ],
};

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: "user", password: "123", isLoading: true },
    }),
  ],
};
