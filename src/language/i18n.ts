import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: {
          learn: "No tasks",
          description: "Dashboard",
          logout: "Logout",
        },
      },
      ru: {
        translation: {
          learn: "Задачи отсутствуют",
          description: "панель",
          logout: "Выйти",
        },
      },
    },
  });
