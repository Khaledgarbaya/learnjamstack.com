import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import { Link, graphql } from 'gatsby'

const IndexPage = ({data:{courses, tips, articles}}) => (
  <Layout>
    <SEO
      title="Learn JAMStack"
      keywords={[`gatsby`, `jamstack`, `react`, `netlify`]}
    />

    <div className="container lg:max-w-screen-lg mx-auto px-6 py-10">
      <div className="mb8">
        <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
          <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 border-b-2 border-indigo -mb-2px">
            Jammy Tips
          </h2>
          <Link
            to="/jammy-tips"
            className="font-semibold text-indigo-dark hover:underline no-underline"
          >
            View All
          </Link>
        </div>
        {
          tips && <div className="flex flex-wrap -mx-3">
            {
              tips.edges.map(( {node} ) =>(
                <Card node={node} key={node.contentful_id} />
              )
              )
            }
          </div>
        }

        <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
          <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 border-b-2 border-indigo -mb-2px">
            Courses
          </h2>
          <Link
            to="/courses"
            className="font-semibold text-indigo-dark hover:underline no-underline"
          >
            View All
          </Link>
        </div>
        {
          courses && <div className="flex flex-wrap -mx-3">
            {
              courses.edges.map(( {node} ) =>(
                <Card node={node} key={ node.contentful_id }/>)
              )
            }
          </div>
        }

        <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
          <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 border-b-2 border-indigo -mb-2px">
            Articles
          </h2>
          <Link
            to="/articles"
            className="font-semibold text-indigo-dark hover:underline no-underline"
          >
            View All
          </Link>
        </div>
        {
          articles && <div className="flex flex-wrap -mx-3">
            {
              articles.edges.map(( {node} ) =>(
                <Card node={node} key={ node.contentful_id }/>)
              )
            }
          </div>
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
{
  courses: allContentfulJamStackEntry(filter: {category: {eq: "courses"}}) {
    edges {
      node {
        ...entryFields
      }
    }
  }
  tips: allContentfulJamStackEntry(filter: {category: {eq: "tips"}}) {
    edges {
      node {
        ...entryFields
      }
    }
  }
  articles: allContentfulJamStackEntry(filter: {category: {eq: "articles"}}) {
    edges {
      node {
        ...entryFields
      }
    }
  }
}

fragment entryFields on ContentfulJamStackEntry {
  title
  contentful_id
  externalLink
  domain
  picture {
    file {
      url
    }
  }
}
`
