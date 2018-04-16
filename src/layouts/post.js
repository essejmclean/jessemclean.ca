import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/Wrapper'
import Text from '../components/Text'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  transition,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark
  return (
    <div style={transition && transition.style}>
      <Helmet
        title={frontmatter.title}
        meta={[
          {
            name: 'description',
            content: excerpt,
          },
          { property: 'og:title', content: frontmatter.title },
          { property: 'og:type', content: 'article' },
          {
            property: 'og:url',
            content: 'https://jessemclean.ca' + frontmatter.path,
          },
          { property: 'og:description', content: excerpt },
        ]}
      />
      <Wrapper>
        <Text maxWidth={0}>{frontmatter.title}</Text>
        <Text maxWidth={0}>{frontmatter.date}</Text>
        <Text maxWidth={0} dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
