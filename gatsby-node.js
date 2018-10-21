/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {

  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPage {
          edges {
            node {
              id
              pageData {
                slug
              }
            }
          }
        }
      }`
    ).then((pages) => {
        pages.data.allPage.edges.forEach(({node}) => {
          createPage({
            path: node.pageData.slug,
            component: path.resolve('./src/templates/Page.js'),
            context: {
              slug: node.pageData.slug
            }
          })
        });
      resolve();
    })
  })

};
