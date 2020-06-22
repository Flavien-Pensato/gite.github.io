import React, {useState} from 'react'
import Portal from './Portal'

export default ({ title, src, overlay = false, legend, ...props}) => {
  const [open, setOpen] = useState()

  const image = (
    <figure onClick={() => setOpen(true)}>
      <img src={src} alt={title} {...props} />
        {overlay && <div className="overlay" />}
      <figcaption>{legend}</figcaption>
    </figure>
  )

  if (open) {
    return <Portal>
      <div className="overlay-modal" onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        setOpen(false)
      }}>
        <button className="button-close" onClick={() => setOpen(false)}>Fermer</button>
        {image}
      </div>
    </Portal>
  }

  return image 
}
