import english from "./en";

const supportedLanguages: LanguageMapper = {
  en: english,
};

interface LanguageMapper {
  en: { [key: string]: string };
}

export type Language = keyof LanguageMapper;

export const defaultLanguage: Language = "en";
export const defaultTranslateEnabled: boolean = false;

export default supportedLanguages;
