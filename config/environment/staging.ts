const stagingConfig = {
  env: "staging",
  releaseChannel: "staging",
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
    host: "projectest.tech/api",
    version: "",
  },
  webUrl: {
    protocol: "http",
    host: "192.168.0.108:8080",
  },
};

export default stagingConfig;
