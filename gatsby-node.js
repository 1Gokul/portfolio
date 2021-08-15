/* eslint-disable */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}

exports.createPages = async({ actions, graphql }) => {
  const { data } = await graphql(`
    query{
      allMdx {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `)

  if(data){
    // create page for each mdx file
    data.allMdx.nodes.forEach(post => {
      actions.createPage({
        path: `blog/${post.slug}`,
        component:  require.resolve(`./src/templates/BlogPost.js`),
        context: {
          slug: post.slug,
        },
      })
    })
  }
}
