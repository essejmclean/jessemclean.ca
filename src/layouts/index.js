import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'
import theme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  ${normalize()};
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-feature-settings: "kern" 1;
    -ms-font-feature-settings: "kern" 1;
    -o-font-feature-settings: "kern" 1;
    -webkit-font-feature-settings: "kern" 1;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
  }
  html { font: 100%/1.5 system-ui,-apple-system,BlinkMacSystemFont,SF UI,Helvetica Neue,sans-serif; }
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          {
            name: 'keywords',
            content: data.site.siteMetadata.keywords,
          },
          { name: 'author', content: 'Jesse McLean' },
          { property: 'og:title', content: data.site.siteMetadata.title },
          { property: 'og:site_name', content: 'Jesse McLean' },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:url',
            content: 'https://jessemclean.ca/',
          },
          {
            property: 'og:description',
            content: data.site.siteMetadata.description,
          },
        ]}
        link={[{ rel: 'canonical', href: 'https://jessemclean.ca/' }]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
      <Footer />
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`