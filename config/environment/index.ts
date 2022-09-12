import Constants from "expo-constants";
import developmentConfig from "./development";
import productionConfig from "./production";
import stagingConfig from "./staging";
import testConfig from "./test";

function getEnv() {
  const env = Constants.manifest?.extra?.env;

  console.log("ENV = ", env);

  if (env === productionConfig.releaseChannel) {
    return productionConfig;
  }
  if (env === stagingConfig.releaseChannel) {
    return stagingConfig;
  }
  if (env === developmentConfig.releaseChannel) {
    return developmentConfig;
  }
  if (env === testConfig.releaseChannel) {
    return testConfig;
  }
  return stagingConfig;
}

export default getEnv();
