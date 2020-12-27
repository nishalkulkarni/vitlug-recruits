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
                  Domain
                  Domain_2
                  Domain_3
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["Registration_Number", "Domain", "Domain_2", "Domain_3"],
        store: ["id", "Name", "Registration_Number", "Domain", "Domain_2", "Domain_3"],
        normalizer: ({ data }) =>
          data.allPeopleCsv.edges.map(({ node }) => ({
            id: node.id,
            Name: node.Name,
            Registration_Number: node.Registration_Number,
            Domain: node.Domain,
            Domain_2: node.Domain_2,
            Domain_3: node.Domain_3,
          })),
      },
    },
  ],
}
