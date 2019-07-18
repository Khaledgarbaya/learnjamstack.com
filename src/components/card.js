import React from 'react'

const Card = ({ node:{ title, externalLink, picture, domain } }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8">
    <a
      href={externalLink}
      className="no-underline bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden"
    >
      <div>
        <div
          className="bg-cover aspect-ratio-16x9"
          style={{
            backgroundImage: `url(https:${picture.file.url}?w=640&h=360&fit=thumb)`
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="font-display text-black no-underline mb-4">
          {title}
        </h3>
        <div>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm mr-2">{domain}</span>
            <svg
              className="h-4 w-4 text-grey fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z" />
            </svg>
          </p>
        </div>
      </div>
    </a>
  </div>
)

export default Card
