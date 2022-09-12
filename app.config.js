module.exports = ({ config }) => {
  const env = process.env.APP_ENV;
  if (env === "production") {
    return {
      ...config,
      name: "Studenter",
      version: "1.0.0",
      icon: "./assets/images/icon.png",
      primaryColor: "#F2F2F2",
      ios: {
        ...config.ios,
        bundleIdentifier: "com.domain.app",
        buildNumber: "1.0.0",
      },
      android: {
        ...config.android,
        package: "com.domain.app",
        versionCode: 100,
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#F2F2F2",
        },
      },
      plugins: [
        ...config.plugins,
        [
          "expo-notifications",
          {
            icon: "./assets/images/notification-icon.png",
            color: "#ffffff",
          },
        ],
      ],
      web: {
        favicon: "./assets/images/icon.png",
      },
      extra: {
        env,
      },
    };
  } else if (!env || env === "staging") {
    return {
      ...config,
      name: "Studenter Staging",
      version: "1.0.0",
      icon: "./assets/images/icon-staging.png",
      primaryColor: "#ffffff",
      ios: {
        ...config.ios,
        bundleIdentifier: "com.domain.staging.app",
        buildNumber: "1.0.0",
      },
      android: {
        ...config.android,
        package: "com.domain.staging.app",
        versionCode: 100,
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundColor: "#ffffff",
        },
      },
      plugins: [
        ...config.plugins,
        [
          "expo-notifications",
          {
            icon: "./assets/images/notification-icon-staging.png",
            color: "#ffffff",
          },
        ],
      ],
      web: {
        favicon: "./assets/images/icon-staging.png",
      },
      extra: {
        env,
      },
    };
  } else if (env === "development") {
    return {
      ...config,
      name: "Studenter Development",
      version: "1.0.0",
      icon: "./assets/images/icon-staging.png",
      primaryColor: "#ffffff",
      ios: {
        ...config.ios,
        bundleIdentifier: "com.domain.development.app",
        buildNumber: "1.0.0",
      },
      android: {
        ...config.android,
        package: "com.domain.development.app",
        versionCode: 100,
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/images/icon-staging.png",
      },
      extra: {
        env,
      },
    };
  } else if (env === "test") {
    return {
      ...config,
      name: "Studenter Testing",
      version: "1.0.0",
      icon: "./assets/images/icon-staging.png",
      primaryColor: "#ffffff",
      ios: {
        ...config.ios,
        bundleIdentifier: "com.domain.development.app",
        buildNumber: "1.0.0",
      },
      android: {
        ...config.android,
        package: "com.domain.development.app",
        versionCode: 100,
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundImage: "./assets/images/adaptive-icon-staging.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/images/icon-staging.png",
      },
      extra: {
        env,
      },
    };
  }
};
