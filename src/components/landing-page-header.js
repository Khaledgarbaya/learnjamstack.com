import PropTypes from 'prop-types'
import React from 'react'
import SubscribeForm from '../components/course-subscribe-form'
import Helmet from 'react-helmet'

const LandingPageHeader = ({ siteTitle }) => (
  <div
    className="bg-blue-darkest"
    style={{
      backgroundImage: `url(/charlie-brown.svg)`
    }}
  >
    <Helmet>
      <script
        type="text/javascript"
        src="https://gumroad.com/js/gumroad.js"
      ></script>

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://learnjamstack.com/migrate-a-reactjs-project-to-gatsby/"
      />
      <meta
        property="og:description"
        content="Learn how to migrate a create-react-app project to Gatsby!"
      />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/ka0lider8v0h/24afcjZf48FAB6dXS5rSZy/121feb35fac9897954e3775e8543eca0/cra-vs-gatsby.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://learnjamstack.com/migrate-a-reactjs-project-to-gatsby/"
      />
      <meta
        property="twitter:description"
        content="Learn how to migrate a create-react-app project to Gatsby!"
      />
      <meta
        property="twitter:image"
        content="https://images.ctfassets.net/ka0lider8v0h/24afcjZf48FAB6dXS5rSZy/121feb35fac9897954e3775e8543eca0/cra-vs-gatsby.png"
      />
    </Helmet>
    <div className="container flex flex-wrap-reverse items-center lg:max-w-screen-lg mx-auto px-6 py-12 text-white">
      <div className="w-full md:w-1/2">
        <div className="mb-12 relative max-w-sm">
          <h1 className="font-display font-heading font-semibold text-white text-2xl sm:text-5xl md:text-6xl mb-4 leading-none">
            Learn how to migrate a create-react-app project to Gatsby!
          </h1>

          <SubscribeForm />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center">
        <img
          src="/react-to-gatsby.png"
          alt="Mr Jam taking react on a road to Gatsby"
        />
      </div>
    </div>
  </div>
)

LandingPageHeader.propTypes = {
  siteTitle: PropTypes.string
}

LandingPageHeader.defaultProps = {
  siteTitle: ``
}

export default LandingPageHeader
