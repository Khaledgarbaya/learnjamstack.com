import PropTypes from 'prop-types'
import React from 'react'
import SubscribeForm from '../components/course-subscribe-form'

const LandingPageHeader = ({ siteTitle }) => (
  <div
    className="bg-blue-darkest"
    style={{
      backgroundImage: `url(/charlie-brown.svg)`
    }}
  >
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
