import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .init({
    fallbackLng: "ru",
    lng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   loadPath: () => {
    //     const isStorybook =
    //       window.location.pathname.includes("storybook-static");
    //     return isStorybook
    //       ? "/storybook-static/locales/{{lng}}/{{ns}}.json"
    //       : "/locales/{{lng}}/{{ns}}.json";
    //   },
    // },
  });

export default i18n;
