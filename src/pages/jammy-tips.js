import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import { graphql } from 'gatsby'

const IndexPage = ({data:{ tips }}) => (
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
        </div>
        {
          tips && <div className="flex flex-wrap -mx-3">
            {
              tips.edges.map(( {node} ) =>(
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
export const coursesQuery = graphql`
{
  tips: allContentfulJamStackEntry(filter: {category: {eq: "tips"}}) {
    edges {
      node {
        ...entryFields
      }
    }
  }
}
`
