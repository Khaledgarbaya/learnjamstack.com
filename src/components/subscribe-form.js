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
      <div className="max-w-sm sm:flex">
        <input type="hidden" value="1" name="embed" />
        <input
          type="email"
          className="focus:outline-none block text-lg sm:text-xl w-full bg-white rounded sm:rounded-r-none px-6 py-3 sm:py-4 mb-2 sm:mb-0"
          name="email_address"
          placeholder="Enter your email"
          required=""
        />
        <button className="focus:outline-none focus:bg-blue sm:text-md w-full sm:w-auto bg-blue-dark hover:bg-blue rounded sm:rounded-l-none uppercase text-white font-bold tracking-wide py-3 px-6 sm:py-4">
          Begin learning
        </button>
      </div>
    </form>
  )
}

export default SubscribeForm
