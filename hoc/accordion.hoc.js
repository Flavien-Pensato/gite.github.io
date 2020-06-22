import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const withAccordion = WrappedComponent => {
  const Accordion = React.forwardRef(({ defaultValue, value, onClick, children, ...props }, ref) => {
    const ContainerRef = useRef()
    const [state, setState] = useState()

    const handleClick = event => {
      event.preventDefault()

      if (state) {
        setState(false)
      } else {
        setState(true)
      }

      if (onClick) {
        onClick(event)
      }
    }

    useEffect(() => {
      setState(value)
    }, [value])

    useEffect(() => {
      setState(defaultValue || value)
    }, [])

    return (
      <>
        <WrappedComponent ref={ref} onClick={handleClick} open={state} {...props} />
        <div ref={ContainerRef} style={{
          maxHeight: `${(state && ContainerRef.current.scrollHeight) || 0}px`,
          transition: 'max-height 0.2s ease-out',
          overflow: 'hidden' }}
  >
          {children}
        </div>
      </>
    )
  })

  Accordion.defaultProps = {
    value: false,
    defaultValue: false,
    onClick: undefined,
  }

  Accordion.propTypes = {
    defaultValue: PropTypes.bool,
    value: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  return Accordion
}

export default withAccordion
