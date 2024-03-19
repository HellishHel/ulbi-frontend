import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
export const ThemeDecorator =
  (theme: Theme, options?: any) => (Story: StoryFn) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story {...options} />
        </div>
      </ThemeProvider>
    );
  };
