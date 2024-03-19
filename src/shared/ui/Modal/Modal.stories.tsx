import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Modal",
    isOpen: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: meta.args,
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: meta.args,
    }),
  ],
};
