import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`gatsby`, `tailwind`, `react`, `contentful`, `jamstack`]}
    />
      <div className="border border-grey-dark lg:border-grey-dark bg-white rounded-b lg:rounded-r p-8">
      <h2 className="p-8">LearnJAMstack.com a curated list of resources about JAMstack</h2>
      <p className="my-6">I am very passionate about JAMstack, I work with it every day, and I also teach. I started collecting all the new resources about the technology and wanted to share with the community in a weekly digestible newsletter. Or if you have a big appetite, you can check out all the resources on the website.</p>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('/khaled-garbaya.png')"}} title="Khaled Garbaya the creator of learjamstack.com">
        </div>
        <div className=" flex flex-col justify-between leading-normal p-4">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Made with love by Khaled Garbaya</div>
            <p className="text-gray-700 text-base">Software developer and active open sorcerer. He speaks multiple languages and is often overheard saying "Bonjour" in HTML.</p>
          </div>
          </div>
        </div>
      </div>
  </Layout>
);

export default AboutPage
