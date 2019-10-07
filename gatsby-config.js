module.exports = {
  siteMetadata: {
    title: `The Musings of Zach Hurst`,
    name: `Zach Hurst`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to the Musings of Zach Hurst, an experimental blog built atop a Gatsby JS theme called Novela by Narative.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/zachhurst`,
      },
      {
        name: `github`,
        url: `https://github.com/zachhurst`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/zhurst`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/zhurst/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
