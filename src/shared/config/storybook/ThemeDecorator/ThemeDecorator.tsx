import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
export const ThemeDecorator =
  (theme: Theme, options?: any) => (Story: StoryFn) => {
    return (
      <div className={`app ${theme}`}>
        <Story {...options} />
      </div>
    );
  };
