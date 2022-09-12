import { StoreActionResolverRegister } from "../../models/types";
import newsActionResolverRegister from "./news";

const ActionResolverRegister: StoreActionResolverRegister = {
  ...newsActionResolverRegister,
};

export default ActionResolverRegister;
