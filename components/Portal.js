import React, {useRef, useEffect} from 'react'
import ReactDom from 'react-dom'

export default ({children}) => {
  const ref = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(ref.current)

    return () => document.body.removeChild(ref.current)
  }, [])

  return ReactDom.createPortal(children, ref.current)
}
