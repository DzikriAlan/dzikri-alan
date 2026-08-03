/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "idn"],
    localeDetection: false,
  },
  // Picks up locale JSON edits without restarting the dev server.
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
