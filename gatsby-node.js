/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postLayout = path.resolve(`src/layouts/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
          next {
            frontmatter {
              path
            }
          }
          previous {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      console.log(edge)
      createPage({
        path: edge.node.frontmatter.path,
        component: postLayout,
        context: {
          nextPost: edge.next ? edge.next.frontmatter.path : 'n/a',
          previousPost: edge.previous ? edge.previous.frontmatter.path : 'n/a',
        }, // additional data can be passed via context
      })
    })
  })
}
