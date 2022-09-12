const developmentConfig = {
  env: "development",
  releaseChannel: "development",
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
    protocol: "http",
    host: "127.0.0.1:8080",
    version: "",
  },
  webUrl: {
    protocol: "https",
    host: "your.web.domain.com",
  },
};

export default developmentConfig;
