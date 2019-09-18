import React from 'react'

function SubscribeForm() {
  return (
    <form
      action="https://app.convertkit.com/forms/1036024/subscriptions"
      method="post"
      target="popupwindow"
      onSubmit={e => {
        e.preventDefault()
        window.open(
          'https://pages.convertkit.com/55c3df4a07/8e001d610f',
          'popupwindow',
          'scrollbars=yes,width=800,height=600'
        )
        return true
      }}
    >
      <p className="text-lg font-body sm:text-xl text-white mb-4">
        <span className="block text-white leading-normal text-center md:text-left text-base xl:text-lg mb-6">
          Sign up for our newsletter to get{' '}
          <span className="text-blue-light font-bold">
            a free preview of the course
          </span>
        </span>
      </p>
      <div className="sm:focus-within:shadow-outline font-body rounded-lg">
        <div className="max-w-sm sm:flex font-semibold sm:shadow sm:rounded-lg sm:overflow-hidden">
          <input type="hidden" value="1" name="embed" />
          <input
            type="email"
            className="shadow sm:shadow-none block w-full rounded-lg focus:border-indigo border border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1 px-6 py-4 lg:py-5 focus:outline-none"
            name="email_address"
            placeholder="Enter your email"
            required=""
          />
          <button className="text-sm shadow sm:shadow-none block w-full sm:w-auto rounded-lg sm:rounded-none focus:outline-none bg-blue-dark hover:bg-blue text-white text-shadow uppercase tracking-wide font-semibold px-6 py-4 lg:py-5">
            Get the previews
          </button>
        </div>
        <div className="text-lg mt-6 text-center md:text-left">
          <p>Or <a className="font-semibold no-underline border-blue-light border-b-4 text-white" href="#get-migrating-from-cra-to-gatsby">buy now</a> if you're already convinced!</p>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
