import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { Text, TextTheme } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {
        title: "Title title title title",
        text: "Text text text text",
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        title: "Title title title title",
        text: "Text text text text",
      },
    }),
  ],
};

export const OnlyTitleLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {
        title: "Title title title title",
      },
    }),
  ],
};

export const OnlyTitleDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        title: "Title title title title",
      },
    }),
  ],
};

export const OnlyTextLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {
        text: "Text text text text",
      },
    }),
  ],
};

export const OnlyTextDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK, {
      args: {
        text: "Text text text text",
      },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT, {
      args: {
        title: "Title title title title",
        text: "Text text text text",
        theme: TextTheme.ERROR,
      },
    }),
  ],
};
