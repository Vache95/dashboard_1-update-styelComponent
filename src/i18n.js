import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from 'language/en/translation.json';
import translationRu from 'language/ru/translation.json';

const resoursec = {
  en: {
    translation: translationEn,
  },
  am: {
    translation: translationRu,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resoursec,
    detection: {
      caches: ['cookie'],
    },
  });

export default i18next;
