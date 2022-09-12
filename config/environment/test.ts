const testConfig = {
  env: "test",
  releaseChannel: "test",
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
    host: "localhost:8080",
    version: "",
  },
  webUrl: {
    protocol: "http",
    host: "localhost:3000",
  },
};

export default testConfig;
