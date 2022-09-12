const productionConfig = {
  env: "production",
  releaseChannel: "production",
  appInfo: {
    companyName: "Studenter",
    appName: "Studenter",
    storeVersion: "1.0.0",
    version: "1.0.0",
    storeUrl: {
      ios: "https://www.apple.com/app-store/",
      android: "https://play.google.com/store/",
    },
  },
  api: {
    protocol: "https",
    host: "your.api.domain.com",
    version: "",
  },
  webUrl: {
    protocol: "https",
    host: "your.web.domain.com",
  },
};

export default productionConfig;
