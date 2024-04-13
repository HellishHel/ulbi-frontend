import type { Preview } from "@storybook/react";

// import i18n from "../../src/shared/config/i18n/i18nForStorybook";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Русский" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    TranslationDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
};

export default preview;
