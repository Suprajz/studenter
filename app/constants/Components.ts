import { Tab } from "../models/types";

// example of constants on different components

// home screen constants

export const homeTabs: { [key: string]: Tab } = {
  offers: { label: "Offers", value: "offers", title: "Dispatched Jobs" },
  active: { label: "Active", value: "active", title: "Your Jobs" },
};
