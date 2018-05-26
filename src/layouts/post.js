import React from 'react'
import Helmet from 'react-helmet'
import { Box } from 'rebass'
import Wrapper from '../components/Wrapper'
import Text from '../components/Text'
import RichText from '../components/RichText'
import NextPost from '../components/NextPost'
import PostNav from '../components/PostNav'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  transition,
}) {
  const { node, previous, next } = data
  return (
    <div style={transition && transition.style}>
      <Helmet
        title={node.frontmatter.title + ' | Jesse McLean'}
        meta={[
          {
            name: 'description',
            content: node.excerpt,
          },
          {
            property: 'og:title',
            content: node.frontmatter.title + ' | Jesse McLean',
          },
          { property: 'og:type', content: 'article' },
          {
            property: 'og:url',
            content: 'https://jessemclean.ca' + node.frontmatter.path,
          },
          { property: 'og:description', content: node.excerpt },
        ]}
      />
      <Wrapper is="main">
        <Box is="header" mb={4}>
          <Text is="h1" size="large" maxWidth={0} mb={0}>
            {node.frontmatter.title}
          </Text>
          <Text fade={true} maxWidth={0}>
            {node.frontmatter.date}
          </Text>
        </Box>
        <RichText
          is="article"
          maxWidth={0}
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      </Wrapper>
      <Wrapper>
        <PostNav
          nextTitle={next && next.frontmatter.title}
          nextPath={next && next.frontmatter.path}
          previousTitle={previous && previous.frontmatter.title}
          previousPath={previous && previous.frontmatter.path}
        />
      </Wrapper>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath(
    $path: String!
    $previousPost: String!
    $nextPost: String!
  ) {
    node: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    previous: markdownRemark(frontmatter: { path: { eq: $previousPost } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $nextPost } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
