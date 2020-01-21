import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <hr />
    <Img fixed={data.file.childImageSharp.fixed} />
    <p>{data.site.siteMetadata.author}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    file(relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
