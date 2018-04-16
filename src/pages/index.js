import React from 'react'
import Link from 'gatsby-link'
import Wrapper from '../components/Wrapper'
import Text from '../components/Text'
import PostItem from '../components/PostItem'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  transition,
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  return (
    <div style={transition && transition.style}>
      <Wrapper>
        <Text maxWidth={0}>
          <Link to="/">Jesse McLean</Link>
          &nbsp;is a designer and front-end developer, and co-founder of{' '}
          <a href="https://fieldmedialab.com" target="_blank">
            Field Media Lab
          </a>, a digital product studio. He's interested in design systems and
          the borrowing of ideas from other creative practices.
        </Text>
      </Wrapper>
      <Wrapper>{Posts}</Wrapper>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
