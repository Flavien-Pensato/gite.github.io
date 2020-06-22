import React from 'react'

export default ({ title, src, overlay = false, legend, ...props}) => (
  <figure>
    <img src={src} alt={title} {...props} />
    {overlay && <div className="overlay" />}
    <figcaption>{legend}</figcaption>
  </figure>
)
