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
      <p className="text-lg sm:text-xl text-white font-semibold mb-4">
        <span className="hidden sm:inline">
          Get a weekly Digest in your inbox{' '}
        </span>{' '}
        <span className="text-blue-light ml-1">→</span>
      </p>
      <div className="sm:focus-within:shadow-outline rounded-lg">
        <div className="max-w-sm sm:flex sm:shadow sm:rounded-lg sm:overflow-hidden">
          <input type="hidden" value="1" name="embed" />
          <input
            type="email"
            className="shadow sm:shadow-none block w-full rounded-lg focus:border-indigo border border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1 px-6 py-4 lg:py-5 focus:outline-none"
            name="email_address"
            placeholder="Enter your email"
            required=""
          />
          <button className="text-sm shadow sm:shadow-none block w-full sm:w-auto rounded-lg sm:rounded-none focus:outline-none bg-blue-dark hover:bg-blue text-white text-shadow uppercase tracking-wide font-semibold px-6 py-4 lg:py-5">
            Begin learning
          </button>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
