import React from 'react'
import SEO from '../components/seo'
import LandingPageHeader from '../components/landing-page-header'

const ReactAndGatsbyLandingPage = () => (
  <div>
    <SEO
      title="Learn JAMStack | Learn how to migrate a reactjs to Gatsby!"
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
    <LandingPageHeader />
    <div className="font-body text-lg">
      <div className="container max-screen-w-lg mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="font-heading text-black text-4xl font-display font-semibold leading-tight mb-8">
          "Gatsbyjs can be a create-react-app replacement"
        </h2>
        <p className="mb-4 leading-normal">
          Gatsbyjs and create-react-app are similar in that can help you set up
          application and removes much of the configuration headache. However,
          Gatsby offers more like backed in performance optimizations and static
          rendering without the need for a server and a thriving ecosystem of
          plugins.
        </p>
      </div>

      <div className="container max-screen-w-lg mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="font-heading text-black text-4xl font-display font-semibold leading-tight mb-5 py-2">
          Why Migrating to Gatsbyjs?
        </h2>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5 py-2">
          Zero config performance optimazations
        </h3>
        <p className="mb-4 leading-normal">
          Gatsbyjs provides code and data splitting out-of-the-box. It loads
          first your critical HTML and CSS. Once that loaded it prefetches
          resources for other pages. That way clicking around feels so fast.
          Aditionaly it offers things like:
        </p>
        <ul>
          <li className="mb-3 leading-normal">
            gatsby-link uses an intersection observer to preload linked pages
            when they appear in the viewport, making them feel like they load
            instantly
          </li>
          <li className="mb-3 leading-normal">
            gatsby-image will create optimized versions of your images in
            different sizes, loading a smaller, optimized version of an image
            and replacing it with a higher resolution version when loading has
            finished. It also uses an intersection observer to cheaply lazy load
            images.
          </li>
        </ul>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5 py-2">
          Server side rendering without a server
        </h3>
        <p className="mb-4 leading-normal">
          Gatsbyjs uses React component as a view layer so you can share and
          reuse them across pages/projects. Once it loads the page's javascript
          code, your website becomes a full React app.
        </p>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5 py-2">
          A unified Data layer using GraphQL
        </h3>
        <p className="mb-4 leading-normal">
          Gatsby.js uses{' '}
          <a
            className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
            href="https://graphql.org/learn/"
          >
            GraphQL
          </a>{' '}
          to share data across pages. You only get the data you need in the
          page. At build time Gatsby will resolve the query and embed it in your
          page.
        </p>
        <h3 className="font-heading text-black text-xl font-display font-semibold leading-tight mb-5">
          A rich plugin ecosystem
        </h3>
        <p className="mb-4 leading-normal">
          With Gatsby's flexible plugin system it let's you bring your own data
          source. From anywhere like CMS, database or filesystem and make
          queriable through GraphQL.
        </p>
      </div>
      <div className="container max-screen-w-lg mx-auto mb-10 p-6 border-b border-dashed">
        <h2 className="max-w-md font-heading text-black text-4xl font-display font-semibold leading-tight mb-10">
          Who is this for (and not for)?
        </h2>
        <div>
          <p className="mb-4 leading-normal">
            This course is will help to port your existing create-react-app
            project to Gatsby by reusing as much code from the project as you
            can. It will also explain the difference between the two frameworks.
            The course also will help you to understand Gatsbyjs and how it
            works, so if you want to learn Gatsbyjs this course is for you. If
            you this is your first working with React in general then this
            course might not be a good fit for you.
          </p>
        </div>
      </div>
      <div className="container max-screen-w-lg mx-auto mb-10 p-6">
        <h2 className="text-black font-heading text-4xl font-display font-semibold leading-tight mb-10">
          What will I learn?
        </h2>
        <div>
          <p className="mb-4 leading-normal">
            This course will guide through the process of porting a
            create-react-app to Gatsbyjs. It will cover topics like.
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
                Gatsbyjs
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
                Use Gatsby plugins to inject static data into your app instead
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
              <span>Transform React Route Components to Gatsby pages</span>
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
                How to use React features like Context and hooks with Gatsby
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
        className="mb-10 p-10 bg-grey"
      >
        <div className="container max-screen-w-lg mx-auto text-black">
          <h2 className="text-center font-heading text-4xl font-display font-semibold leading-tight mb-10">
            What’s in the course?
          </h2>
          <div className="text-2xl flex flex-wrap justify-center">
            <div className="p-10">
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
                  <span>Bootstrap the simplest Gatsbyjs project</span>
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
                  <span>Port React component to Gatsby pages</span>
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
                  <span>Routing in Gatsby</span>
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
                  <span>Handling state in Gatsby</span>
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
                  <span>Handling Environment Variables in Gatsby</span>
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
            <div className="p-10">
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
                  <span>Wrap all Gatsby Component in a Context</span>
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
                  <span>Use React hooks with Gatsby</span>
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
                  <span>Load dynamic graphql data in Gatsby</span>
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
                  <span>Use Gatsbyjs without GraphQL</span>
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
                  <span>Build an deploy a Gatsbyjs project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-screen-w-lg mx-auto mb-10 p-6">
        <h2 className="text-black font-heading text-4xl font-display font-semibold leading-tight mb-10">
          Who teaches this?
        </h2>
        <div>
          <p className="mb-4 leading-normal">
            Hi my name is{' '}
            <a
              className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
              href="https://twitter.com/khaled_garbaya"
            >
              Khaled Garbaya
            </a>{' '}
            I am a long time contributor to Gatsbyjs. I love the framework and
            been working with it since pre v1 version. I work on a variety of
            projects with different frameworks and environments, not only on the
            frontend and browsers but also on the server side, command line
            tools and other environments capable of running JavaScript. I love
            to share my knowledge through e-books and videos. you can check out
            some of my work{' '}
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
      {/* Call to Action */}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")`
        }}
        className="bg-indigo-dark h-36"
      >
        <div className="max-w-lg mx-auto px-8 text-xl py-16">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-6xl text-white font-bold mt-0 mb-0">
              Get Migrating CRA app to Gatsbyjs
            </h2>
            <p className="font-heading text-2xl md:text-3xl text-blue-light font-semibold">
              Choose the package that works for you.
            </p>
          </div>
          <div className="mt-12 block lg:flex lg:items-center lg:flex-row-reverse lg:mt-16">
            <div className="bg-white shadow rounded-lg max-w-md mx-auto lg:min-w-0 lg:w-3/5 relative overflow-hidden">
              <div className="px-8 py-6 bg-grey-lighter">
                <h3 className="text-blue-grey-darker uppercase tracking-wide text-lg sm:text-xl text-center font-bold my-0">
                  The Complete Package
                </h3>
              </div>

              <div className="px-8 pb-8 text-base md:text-lg">
                <div className="text-center py-6 lg:py-4">
                  <span className="line-through opacity-75 inline-flex items-center font-display text-xl md:text-2xl font-semibold text-grey-dark mr-3 sm:mr-4">
                    <span className="text-xl">$</span>
                    <span>149</span>
                  </span>
                  <span className="inline-flex items-center font-display text-5xl md:text-6xl font-bold text-black mr-3 sm:mr-4">
                    <span className="text-2xl md:text-3xl">$</span>
                    <span>79</span>
                  </span>
                  <span className="inline-flex items-center font-display text-xl md:text-2xl font-bold text-grey-dark mr-3 sm:mr-4">
                    USD
                  </span>
                </div>
                <div>
                  <ul className="list-reset px-2 sm:px-6">
                    <li className="flex items-start mb-4">
                      <span className="mr-4 mt-1">
                        <svg
                          className="h-5 w-5 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none" fillRule="evenodd">
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>A migration guide</strong> in PDF format
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        All the <strong>13 in-depth video tutorials</strong>
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>
                          Complete source code for the example project
                        </strong>
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        You can book{' '}
                        <strong>a free 30 min session with me</strong>, to help
                        you with the migration
                      </span>
                    </li>
                  </ul>

                  <div className="text-center mt-12">
                    <a
                      className="no-underline block w-full text-xl sm:text-2xl inline-block bg-no-image rounded-lg focus:outline-none bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark text-white font-semibold px-6 py-4 sm:py-5"
                      href="https://gum.co/axHVW/launchday"
                      data-gumroad-single-product="true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                    <p className="text-base mt-4 mb-0">
                      Buying for your team?{' '}
                      <a
                        href="https://gum.co/mOGcT"
                        target="_blank"
                        onClick={e => {}}
                        className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
                        rel="noopener noreferrer"
                      >
                        View team pricing options
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg mt-16 max-w-xs mx-auto lg:max-w-full lg:rounded-r-none lg:min-w-0 lg:w-2/5 lg:mt-0 overflow-hidden">
              <div className="px-8 py-6 bg-grey-lighter">
                <h3 className="text-blue-grey-darker uppercase tracking-wide text-xl text-center font-bold my-0">
                  The Essentials
                </h3>
              </div>

              <div className="px-8 pb-8 text-base md:text-lg">
                <div className="text-center py-4">
                  <span className="line-through opacity-75 inline-flex items-center font-display text-lg md:text-xl font-semibold text-grey-dark mr-2 sm:mr-3">
                    <span className="text-xl">$</span>
                    <span>89</span>
                  </span>
                  <span className="inline-flex items-center font-display text-4xl md:text-5xl font-bold text-black mr-2 sm:mr-3">
                    <span className="text-xl md:text-2xl">$</span>
                    <span>59</span>
                  </span>
                  <span className="inline-flex items-center font-display text-lg md:text-xl font-bold text-grey-dark mr-2 sm:mr-3">
                    USD
                  </span>
                </div>
                <div>
                  <ul className="list-reset px-2 sm:px-6">
                    <li className="flex items-start mb-4">
                      <span className="mr-4 mt-1">
                        <svg
                          className="h-5 w-5 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none" fillRule="evenodd">
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>A migration guide</strong> in PDF format
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        The first <strong>7 in-depth video tutorials</strong>
                      </span>
                    </li>
                  </ul>

                  <div className="text-center mt-12">
                    <a
                      className="no-underline w-full text-lg sm:text-xl block bg-no-image rounded-lg focus:outline-none bg-grey-light hover:bg-grey focus:bg-blue-grey-dark text-blue font-semibold px-6 py-3 sm:py-4"
                      href="https://gum.co/JOHCS/launchday"
                      target="_blank"
                      data-gumroad-single-product="true"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call to Action */}
      <div className="p-6 bg-grey-darker text-grey-light">
        <div className="container max-screen-w-lg mx-auto ">
          <h2 className="text-center text-white font-heading text-4xl font-display font-semibold leading-tight mb-10">
            Frequently asked questions
          </h2>
          {/* FAQ Section */}
          <div className="lg:flex lg:flex-wrap lg:items-start border-t border-grey-dark py-8 text-xl">
            <div className="lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0">
              Can I get an invoice?
            </div>
            <div className="lg:w-2/3 lg:pl-6 text-blue-grey-light leading-normal">
              <p>
                Totally! Click the "Generate" button on your receipt from
                Gumroad after you purchase and you can generate a detailed
                invoice with any additional information you need.
              </p>
            </div>
          </div>
          {/* END FAQ Section */}
          {/* FAQ Section */}
          <div className="lg:flex lg:flex-wrap lg:items-start border-t border-grey-dark py-8 text-xl">
            <div className="lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0">
              What if I decide it's not for me?
            </div>
            <div className="lg:w-2/3 lg:pl-6 text-blue-grey-light leading-normal">
              <p>
                No problem at all! Email us at{' '}
                <a
                  className="font-semibold no-underline border-blue-lighter border-b-4 text-white"
                  href="mailto:support@learnjamstack.com"
                >
                  support@learnjamstack.com
                </a>{' '}
                and we'll refund you in full, no questions asked.
              </p>
            </div>
          </div>
          {/* END FAQ Section */}
          {/* FAQ Section */}
          <div className="lg:flex lg:flex-wrap lg:items-start border-t border-grey-dark py-8 text-xl">
            <div className="lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0">
              What format are the files?
            </div>
            <div className="lg:w-2/3 lg:pl-6 text-blue-grey-light leading-normal">
              <p>
                The Migration Guide is a PDF, the screencasts are downloadable
                mp4 files.
              </p>
            </div>
          </div>
          {/* END FAQ Section */}
          {/* FAQ Section */}
          <div className="lg:flex lg:flex-wrap lg:items-start border-t border-grey-dark py-8 text-xl">
            <div className="lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0">
              I have another question!
            </div>
            <div className="lg:w-2/3 lg:pl-6 text-blue-grey-light leading-normal">
              <p>
                Sure - email me at{' '}
                <a
                  className="font-semibold no-underline border-blue-lighter border-b-4 text-white"
                  href="mailto:support@learnjamstack.com"
                >
                  khaled@learnjamstack.com
                </a>
              </p>
            </div>
          </div>
          {/* END FAQ Section */}
          {/* FAQ Section */}
          <div className="lg:flex lg:flex-wrap lg:items-start border-t border-grey-dark py-8 text-xl">
            <div className="lg:w-1/3 lg:pr-6 font-bold text-white mb-4 lg:mb-0">
              Can I use the example app on production
            </div>
            <div className="lg:w-2/3 lg:pl-6 text-blue-grey-light leading-normal">
              <p>
                Absolutely - as long as you don't use it as a teaching
                material.You can credit my course if you like, but it's not
                required.
              </p>
            </div>
          </div>
          {/* END FAQ Section */}
        </div>
      </div>
      {/* Call to Action */}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")`
        }}
        className="bg-indigo-dark"
      >
        <div className="max-w-lg mx-auto px-8 text-xl py-16">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-6xl text-white font-bold mt-0 mb-0">
              Get Migrating CRA app to Gatsbyjs
            </h2>
            <p className="font-heading text-2xl md:text-3xl text-blue-light font-semibold">
              Choose the package that works for you.
            </p>
          </div>
          <div className="mt-12 block lg:flex lg:items-center lg:flex-row-reverse lg:mt-16">
            <div className="bg-white shadow rounded-lg max-w-md mx-auto lg:min-w-0 lg:w-3/5 relative overflow-hidden">
              <div className="px-8 py-6 bg-grey-lighter">
                <h3 className="text-blue-grey-darker uppercase tracking-wide text-lg sm:text-xl text-center font-bold my-0">
                  The Complete Package
                </h3>
              </div>

              <div className="px-8 pb-8 text-base md:text-lg">
                <div className="text-center py-6 lg:py-4">
                  <span className="line-through opacity-75 inline-flex items-center font-display text-xl md:text-2xl font-semibold text-grey-dark mr-3 sm:mr-4">
                    <span className="text-xl">$</span>
                    <span>149</span>
                  </span>
                  <span className="inline-flex items-center font-display text-5xl md:text-6xl font-bold text-black mr-3 sm:mr-4">
                    <span className="text-2xl md:text-3xl">$</span>
                    <span>79</span>
                  </span>
                  <span className="inline-flex items-center font-display text-xl md:text-2xl font-bold text-grey-dark mr-3 sm:mr-4">
                    USD
                  </span>
                </div>
                <div>
                  <ul className="list-reset px-2 sm:px-6">
                    <li className="flex items-start mb-4">
                      <span className="mr-4 mt-1">
                        <svg
                          className="h-5 w-5 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none" fillRule="evenodd">
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>A migration guide</strong> in PDF format
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        All the <strong>13 in-depth video tutorials</strong>
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>
                          Complete source code for the example project
                        </strong>
                        , featuring 200+ component and layout ideas
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        You can book <strong>a 30 min session with me</strong>,
                        to help review your code
                      </span>
                    </li>
                  </ul>

                  <div className="text-center mt-12">
                    <a
                      className="no-underline block w-full text-xl sm:text-2xl inline-block bg-no-image rounded-lg focus:outline-none bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark text-white font-semibold px-6 py-4 sm:py-5"
                      href="https://gum.co/axHVW/launchday"
                      target="_blank"
                      data-gumroad-single-product="true"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                    <p className="text-base mt-4 mb-0">
                      Buying for your team?{' '}
                      <a
                        href="https://gum.co/mOGcT"
                        target="_blank"
                        className="font-semibold no-underline border-blue-lighter border-b-4 text-black"
                        rel="noopener noreferrer"
                      >
                        View team pricing options
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg mt-16 max-w-xs mx-auto lg:max-w-full lg:rounded-r-none lg:min-w-0 lg:w-2/5 lg:mt-0 overflow-hidden">
              <div className="px-8 py-6 bg-grey-lighter">
                <h3 className="text-blue-grey-darker uppercase tracking-wide text-xl text-center font-bold my-0">
                  The Essentials
                </h3>
              </div>

              <div className="px-8 pb-8 text-base md:text-lg">
                <div className="text-center py-4">
                  <span className="line-through opacity-75 inline-flex items-center font-display text-lg md:text-xl font-semibold text-grey-dark mr-2 sm:mr-3">
                    <span className="text-xl">$</span>
                    <span>89</span>
                  </span>
                  <span className="inline-flex items-center font-display text-4xl md:text-5xl font-bold text-black mr-2 sm:mr-3">
                    <span className="text-xl md:text-2xl">$</span>
                    <span>59</span>
                  </span>
                  <span className="inline-flex items-center font-display text-lg md:text-xl font-bold text-grey-dark mr-2 sm:mr-3">
                    USD
                  </span>
                </div>
                <div>
                  <ul className="list-reset px-2 sm:px-6">
                    <li className="flex items-start mb-4">
                      <span className="mr-4 mt-1">
                        <svg
                          className="h-5 w-5 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <g fill="none" fillRule="evenodd">
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        <strong>A migration guide </strong> in PDF format
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
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="#2779bd"
                            ></circle>
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
                        The first <strong>7 in-depth video tutorials</strong>
                      </span>
                    </li>
                  </ul>

                  <div className="text-center mt-12">
                    <a
                      className="no-underline w-full text-lg sm:text-xl block bg-no-image rounded-lg focus:outline-none bg-grey-light hover:bg-grey focus:bg-blue-grey-dark text-blue font-semibold px-6 py-3 sm:py-4"
                      href="https://gum.co/JOHCS/launchday"
                      target="_blank"
                      data-gumroad-single-product="true"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call to Action */}
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
