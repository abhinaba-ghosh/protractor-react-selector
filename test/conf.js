exports.config = {
  directConnect: true,
  specs: ["./spec.js"],
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    ignoreProtectedModeSettings: true,
    platform: "ANY"
  },

  plugins: [
    {
      path: "../"
    }
  ]
};
