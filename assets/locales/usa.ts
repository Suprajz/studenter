import { ILocale } from "../../app/models/ILocale";

export const USA: ILocale = {
  localeCode: "usa",
  slug: "united-states",
  timeZone: "America/New_York",
  defaultDateFormat: "MM/DD/YYYY",
  defaultTimeFormat: "hh:mm a",
  defaultLanguage: "en",
  title: "USA",
  range: {
    latitude: {
      from: 47.2570766,
      to: 54.9329271,
    },
    longitude: {
      from: 5.7459723,
      to: 15.0404053,
    },
  },
};
