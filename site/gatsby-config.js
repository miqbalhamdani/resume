module.exports = {
  siteMetadata: {
    description: "Personal page of Iqbal Hamdani",
    locale: "en",
    title: "Iqbal Hamdani",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
