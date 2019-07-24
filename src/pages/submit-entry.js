import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SubmitEntryPage = () => (
  <Layout>
    <SEO
      title="Sumbit a jammy tip, article or course about JAMstack"
      keywords={[`gatsby`, `tailwind`, `react`, `contentful`, `jamstack`]}
    />

    <div classNameName="flex flex-col md:flex-row items-center">
      <form
        name="jamstack-entries"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="post"
        data-netlify
      >
        <input type="hidden" name="form-name" value="jamstack-entries" />
        <h2 className="mb-8">
          Sumbit a jammy tip, article or course about JAMstack
        </h2>
        <div className="mb-4">
          <label
            className="block text-grey-dark text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name <span className="text-red-dark">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            required
            placeholder="James L. Foster"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-dark text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-dark">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
            placeholder="jam@stack.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-dark text-sm font-bold mb-2"
            htmlFor="url"
          >
            Resource URL <span className="text-red-dark">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="url"
            email="url"
            name="url"
            required
            placeholder="https://externaldomain.com/resource"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-dark text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description <span className="text-red-dark">*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            required
            placeholder="some description"
          />
        </div>
        <div className="flex">
          <button className="bg-blue-dark hover:bg-blue-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  </Layout>
)

export default SubmitEntryPage
