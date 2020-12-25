module.exports = {
  siteMetadata: {
    title: `VIT-LUG Recruits 2020`,
    description: `Congratulations to all new recruits! Welcome to VIT-Linux User's Group`,
    author: `@nishalkulkarni`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "people",
        engine: "flexsearch",
        // engineOptions: "default",
        query: `
          {
            allPeopleCsv {
              edges {
                node {
                  id
                  Name
                  Registration_Number
                  Email
                  Domain
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["Registration_Number", "Domain"],
        store: ["id", "Name", "Registration_Number", "Domain"],
        normalizer: ({ data }) =>
          data.allPeopleCsv.edges.map(({ node }) => ({
            id: node.id,
            Name: node.Name,
            Registration_Number: node.Registration_Number,
            Email: node.Email,
            Domain: node.Domain,
          })),
      },
    },
  ],
}
