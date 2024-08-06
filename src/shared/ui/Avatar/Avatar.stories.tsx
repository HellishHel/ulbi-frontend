import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Avatar } from "./Avatar";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    src: "https://lh3.googleusercontent.com/a/ACg8ocJn0mPxDWpR_7lL1bdweavauMOvOkcb4Tq2dkmoS2MiAshF6J5G=s576-c-no",
    size: 150,
    alt: "alt",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: meta.args,
    }),
  ],
};
