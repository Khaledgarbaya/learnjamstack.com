import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, Link, graphql } from 'gatsby'

import Header from './header'
import '../css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <div className="bg-blue py-4 text-lg md:text-xl font-semibold text-white">
          <div className="container lg:max-w-screen-lg mx-auto px-6">
            <span className="block mb-2 md:mb-0 md:inline md:mr-2">We just released a course!</span>
            <Link to="/migrate-a-reactjs-project-to-gatsby" className="font-bold text-white underline">Learn more about it here →</Link>
          </div>
        </div>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </div>

        <footer
          className="bg-blue-darkest"
          style={{
            backgroundImage: `url(/charlie-brown.svg)`
          }}
        >
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              ©{' '}
              <a
                href="https://khaledgarbaya.net"
                className="font-bold no-underline text-white"
              >
                Khaled Garbaya
              </a>
            </p>

            <p>
              <Link to="/about" className="font-bold no-underline text-white">
                About
              </Link>
            </p>
            <p>
              <Link to="/contact" className="font-bold no-underline text-white">
                Contact
              </Link>
            </p>
            <p>
              <a
                href="https://github.com/Khaledgarbaya/learnjamstack.com"
                className="font-bold no-underline text-white"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
