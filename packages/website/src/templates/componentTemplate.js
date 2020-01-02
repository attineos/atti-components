import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import { mdxComponents, PropsTable } from "@pagesComponents/ComponentPage"
import { Header1 } from "@components/global"

export default function Template({ data }) {
  const { componentMetadata, mdx } = data
  const { frontmatter, body } = mdx

  return (
    <>
      <Header1>{frontmatter.title}</Header1>
      <MDXProvider components={mdxComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      {componentMetadata && <PropsTable data={componentMetadata.props} />}
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!, $name: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
      }
    }

    componentMetadata(displayName: { eq: $name }) {
      displayName
      props {
        name
        required
        type {
          name
          value
        }
        description {
          text
        }
        defaultValue {
          value
        }
      }
    }
  }
`
