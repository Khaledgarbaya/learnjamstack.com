import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`gatsby`, `jamstack`, `react`]}
    />

  <form className="mx-auto md:w-1/2"
    method="post"
    data-netlify
  >
    <input type="hidden" name="form-name" value="contact" />
      <label
        className="block font-bold mb-2 text-xs uppercase"
        htmlFor="first-name"
      >
        Name
      </label>

      <input
        className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
        id="first-name"
        type="text"
        name="name"
        placeholder="Jon snow"
      />

      <label
        className="block font-bold mb-2 text-xs uppercase"
        htmlFor="last-name"
      >
        Email
      </label>

      <input
        className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
        id="last-name"
        type="email"
        name="email"
        placeholder="jon@website.com"
      />

      <label
        className="block font-bold mb-2 text-xs uppercase"
        htmlFor="message"
      >
        Message
      </label>

      <textarea
        className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
        placeholder="Say something..."
        rows="8"
        name="message"
      />

      <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-blue-dark hover:bg-blue-darker font-bold px-6 py-3 rounded text-sm text-white">
        Submit
      </button>
    </form>
  </Layout>
)

export default ContactPage
