import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
    children: "AppLink",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        theme: AppLinkTheme.PRIMARY,
        ...meta.args,
      },
    }),
  ],
};

export const SecondaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        theme: AppLinkTheme.SECONDARY,
        ...meta.args,
      },
    }),
  ],
};
