import React from 'react'
import SEO from '../components/seo'
import LandingPageHeader from '../components/landing-page-header'
import '../css/style.css'
import SubscribeForm from '../components/course-subscribe-form'
import Helmet from 'react-helmet'

const ReactAndGatsbyLandingPage = () => (
  <div>
    <SEO
      title="Learn JAMStack | Learn how to migrate a reactjs to GatsbyJS!"
      keywords={[
        `gatsby`,
        `jamstack`,
        `react`,
        `migration`,
        `create-react-app`,
        `CRA`,
        `course`
      ]}
    />
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
    <LandingPageHeader />
    <div className="font-body text-lg">
      <div className="container max-w-lg max-w-lg mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="font-heading text-black text-4xl font-display font-semibold leading-tight mb-8">
          "GatsbyJS can be a create-react-app replacement"
        </h2>
        <p className="mb-4 leading-normal">
          GatsbyJS and create-react-app are similar in that can help you set up
          an application and removes much of the configuration headache.
          However, GatsbyJS offers more like backed in performance optimizations
          and static rendering without the need for a server and a thriving
          ecosystem of plugins.
        </p>
      </div>

      <div className="container max-w-lg  mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="font-heading text-black text-4xl font-display font-semibold leading-tight mb-5 py-2">
          Why Migrating to GatsbyJS?
        </h2>
        <table className="shadow-md rounded max-w-l mx-auto w-full ">
          <thead>
            <tr className="bg-grey-light">
              <th className="w-32 sm:w-64 sm:p-10 p-4"></th>
              <th className="w-32 sm:w-64 sm:p-10 p-4">Gatsby</th>
              <th className="sm:p-64">Create-React-App</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Webpack support
              </td>
              <td className="py-4 text-center px-6 border-b border-grey-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Hot Reloading
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Static Rendering
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#ef5753" />
                  <path d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Code and data splitting
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#ef5753" />
                  <path d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                SEO Friendly App
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#ef5753" />
                  <path d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Plugins Support
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#ef5753" />
                  <path d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                Unified Data Layer
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#1f9d55" />
                  <path
                    class="secondary"
                    d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </td>
              <td className="py-4 px-6 border-b border-grey-light text-center">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-12 w-8"
                >
                  <circle cx="12" cy="12" r="10" fill="#ef5753" />
                  <path d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight my-5 py-2">
          Zero config performance optimazations
        </h3>
        <p className="mb-4 leading-normal">
          GatsbyJS provides code and data splitting out-of-the-box. It loads
          your critical HTML and CSS, then prefetches resources for other pages.
          That way, clicking around feels so fast. Additionally, it offers
          things like:
        </p>
        <ul>
          <li className="mb-3 leading-normal">
            <strong>gatsby-link</strong> uses an intersection observer to
            preload linked pages when they appear in the viewport, making them
            feel like they load instantly
          </li>
          <li className="mb-3 leading-normal">
            <strong>gatsby-image</strong> creates optimized versions of your
            images in Different sizes, loading a smaller, optimized version of
            an image and replacing it with a higher resolution version when
            loading has finished. It also uses an intersection observer to
            cheaply lazy load images.
          </li>
        </ul>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5 py-2">
          Server side rendering without a server
        </h3>
        <p className="mb-4 leading-normal">
          At build time, GatsbyJS takes all your react component with all the
          needed data and generates static HTML, JavaScript, and CSS files. Once
          the website is fully loaded it rehydrates it into a fully fledge React
          PWA
        </p>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5 py-2">
          A unified Data layer using GraphQL
        </h3>
        <p className="mb-4 leading-normal">
          GatsbyJS unifies all data sources into one layer using{' '}
          <a
            className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
            href="https://graphql.org/learn/"
          >
            GraphQL
          </a>{' '}
        </p>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5">
          A rich plugin ecosystem
        </h3>
        <p className="mb-4 leading-normal">
          With GatsbyJS's flexible plugin system, it lets you bring your data
          source. From anywhere like CMS, database, or filesystem and makes it
          queriable through GraphQL.
        </p>
      </div>
      <div className="container max-w-lg  mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="max-w-md font-heading text-black text-4xl font-display font-semibold leading-tight mb-10">
          Who is this for (and not for)?
        </h2>
        <div>
          <p className="mb-4 leading-normal">
            This course Guides you to port your existing create-react-app
            project to GatsbyJS by reusing as much code from the project as you
            can. It explains the difference between the two. The course also
            helps you to understand GatsbyJS and how it works, so if you want to
            learn GatsbyJS, this course is for you. If this is your first
            working with React in general, then this course might not be a good
            fit for you.
          </p>
          <ul>
            <li>Front End devs looking to understand the JAMstack</li>
            <li>JS Developers looking to advance in their career</li>
            <li>Wordpress Developer moving to GatsbyJS</li>
            <li>Anyone who wants to get better at GatsbyJS and React</li>
          </ul>
        </div>
      </div>
      <div className="container max-w-lg  mx-auto mb-10 p-6">
        <h2 className="text-black font-heading text-4xl font-display font-semibold leading-tight mb-10">
          What you'll learn?
        </h2>
        <div>
          <p className="mb-4 leading-normal">
            This course will guide through the process of porting a
            create-react-app to GatsbyJS. It will cover topics like.
          </p>

          <ul className="mb-4 leading-normal">
            <li className="flex items-start mb-4">
              <span className="mr-4 mt-1">
                <svg
                  className="h-5 w-5 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                    <polyline
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      points="6 10 8.667 12.667 14 7.333"
                    ></polyline>
                  </g>
                </svg>
              </span>
              <span>
                Difference in project structure between create-react-app and
                GatsbyJS
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-4 mt-1">
                <svg
                  className="h-5 w-5 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                    <polyline
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      points="6 10 8.667 12.667 14 7.333"
                    ></polyline>
                  </g>
                </svg>
              </span>
              <span>
                Use GatsbyJS plugins to inject static data into your app instead
                of calling service directly
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-4 mt-1">
                <svg
                  className="h-5 w-5 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                    <polyline
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      points="6 10 8.667 12.667 14 7.333"
                    ></polyline>
                  </g>
                </svg>
              </span>
              <span>Transform React Route Components to GatsbyJS pages</span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-4 mt-1">
                <svg
                  className="h-5 w-5 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                    <polyline
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      points="6 10 8.667 12.667 14 7.333"
                    ></polyline>
                  </g>
                </svg>
              </span>
              <span>
                How to use React features like Context and hooks with GatsbyJS
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-4 mt-1">
                <svg
                  className="h-5 w-5 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                    <polyline
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      points="6 10 8.667 12.667 14 7.333"
                    ></polyline>
                  </g>
                </svg>
              </span>
              <span>How to dynamically load data at runtime </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")`
        }}
        className="p-10 bg-grey"
      >
        <div className="container max-screen-w-lg mx-auto text-black">
          <h2 className="text-center font-heading text-4xl font-display font-semibold leading-tight mb-10">
            Videos {`&&`} Modules
          </h2>
          <div className="text-2xl flex flex-wrap justify-center">
            <div className="sm:p-10">
              <h3 className="mb-4 text-center">The basic</h3>
              <ul className="mb-4 leading-normal">
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Bootstrap the simplest GatsbyJS project</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Port React component to GatsbyJS pages</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Combine mutiple data sources using plugins</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Routing in GatsbyJS</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Handling state in GatsbyJS</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Handling Environment Variables in GatsbyJS</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Advanced customizations</span>
                </li>
              </ul>
            </div>
            <div className="sm:p-10">
              <h3 className="mb-4 text-center">Putting everything together</h3>
              <ul>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Load Data using GraphQL</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Wrap all GatsbyJS Component in a Context</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Use React hooks with GatsbyJS</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Load dynamic graphql data in GatsbyJS</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Use GatsbyJS without GraphQL</span>
                </li>
                <li className="flex items-start mb-4">
                  <span className="mr-4 mt-1">
                    <svg
                      className="h-5 w-5 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#2779bd"></circle>
                        <polyline
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          points="6 10 8.667 12.667 14 7.333"
                        ></polyline>
                      </g>
                    </svg>
                  </span>
                  <span>Build an deploy a GatsbyJS project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LandingPageHeader />

      <div className="container max-w-lg  mx-auto mb-10 p-6">
        <h2 className="text-black font-heading text-4xl font-display font-semibold leading-tight mb-10">
          Who teaches this?
        </h2>
        <div className="flex flex-wrap imtes-center justify-center">
          <div className="sm:w-1/3 w-full">
            <img src="/khaled-garbaya.png" alt="Khaled Garbaya's avatar" />
          </div>
          <div className="sm:w-2/3 w-full p-4">
            <p className="mb-4 leading-normal">
              Hi my name is{' '}
              <a
                className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
                href="https://twitter.com/khaled_garbaya"
              >
                Khaled Garbaya
              </a>{' '}
              I am a long-time contributor to GatsbyJS. I love the framework and
              been working with it since pre v1 version. I work on a variety of
              projects with different frameworks and environments, not only on
              the frontend and browsers but also on the server-side,
              command-line tools, and other environments capable of running
              JavaScript. I love to share my knowledge through e-books and
              videos. you can check out some of my work{' '}
              <a
                className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
                href="https://k4d.dev/courses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Call to Action */}
    </div>
    <footer
      className="bg-blue-darkest"
      style={{
        backgroundImage: `url(/charlie-brown.svg)`
      }}
    >
      <div className="max-w-xl mx-auto p-4 md:p-8 text-sm text-center">
        <p className="text-white">© Khaled Garbaya</p>
      </div>
    </footer>
  </div>
)

export default ReactAndGatsbyLandingPage
