import React from "react"
import { graphql } from "gatsby"
import { defaultTheme, ThemeProvider, Header1 } from "atti-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "../helpers/mdxComponents"
import { PropsTable } from "../pagesComponents/componentPage"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const { componentMetadata, mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <Header1 mb="s2">{frontmatter.title}</Header1>
      {componentMetadata && <PropsTable data={componentMetadata.props} />}
      <MDXProvider components={mdxComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
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
