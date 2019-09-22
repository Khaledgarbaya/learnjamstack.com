import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import SubscribeForm from '../components/subscribe-form'
import CarbonAds from 'react-carbon-ads'
const isBrowser = typeof window !== 'undefined'

const Header = ({ siteTitle }) => (
  <div
    className="bg-blue-darkest"
    style={{
      backgroundImage: `url(/charlie-brown.svg)`
    }}
  >
    <nav className="container lg:max-w-xl mx-auto flex flex-row-reverse p-4">
      <Link
        className="block no-underline text-white border-solid border-2 p-2"
        to="/submit-entry"
      >
        Submit an entry <span className="text-blue-light ml-1">→</span>
      </Link>
    </nav>
    <div className="container lg:max-w-xl mx-auto px-6 text-white">
      <div className="flex justify-between flex-wrap-reverse">
        <Link to="/">
          <img
            src="/logo.svg"
            className="mb-12 block"
            width="200"
            alt="A JAM sandiwch wearing glasses"
          />
        </Link>
        {isBrowser && (
          <CarbonAds carbonUrl="https://cdn.carbonads.com/carbon.js?serve=CE7DC2QY&placement=learnjamstackcom" />
        )}
      </div>
      <div className="mb-12">
        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl md:text-6xl mb-4 leading-none">
          Learn JAMstack!
        </h1>
        <p className="text-m sm:text-xl leading-normal max-w-lg">
          A curated list of courses, articles and tips about JAMstack
        </p>
        <SubscribeForm />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
