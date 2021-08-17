/* eslint-disable */
const {createFilePath} = require (`gatsby-source-filesystem`);
const path = require (`path`);

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath ({node, getNode, basePath: 'pages'});
    createNodeField ({
      node,
      name: `slug`,
      value: `/blog${value}`,
    });
  }
};

exports.createPages = async ({actions, graphql}) => {
  const result = await graphql (`
    query{
      allMdx(sort: { fields: [frontmatter___date], order: DESC })  {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild ('ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges

  posts.forEach (({node}, index) => {
    actions.createPage ({
      path: node.fields.slug,
      component: require.resolve (`./src/templates/BlogPost.js`),
      context: {
        id: node.id,
        next: index === 0 ? null : posts[index - 1].node,
        prev: index === (posts.length - 1) ? null : posts[index + 1].node 
      },
    });
  });
};
