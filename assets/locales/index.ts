import { ILocale } from "../../app/models/ILocale";
import { USA } from "./usa";

// it could bi city, region, country or even continent depends on the use case of a project
// these info should maybe be placed on backend instead

const supportedLocales: LocalesMapper = {
  usa: USA,
};

interface LocalesMapper {
  usa: ILocale;
}

export const defaultLocale: ILocale = USA;

export type Locale = keyof LocalesMapper;

export default supportedLocales;
