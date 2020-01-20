const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const componentTemplate = path.resolve(`src/templates/componentTemplate.js`)
  const result = await graphql(`
    {
      allMdx(sort: { order: ASC, fields: [frontmatter___name] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              name
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    node.frontmatter &&
      node.frontmatter.path &&
      createPage({
        path: node.frontmatter.path,
        name: node.frontmatter.name,
        component: componentTemplate,
        context: { name: node.frontmatter.name }, // additional data can be passed via context
      })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-json-view/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
