module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "apple-touch-icon": "off",
        "csp-xss": ["warn", { minScore: 1 }],
        "errors-in-console": "off",
        "installable-manifest": "off",
        "maskable-icon": "off",
        "non-composited-animations": "off",
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "unused-javascript": "off",
      },
    },
  },
};
