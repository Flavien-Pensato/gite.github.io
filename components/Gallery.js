import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Gallery = styled.div`
  display: inline-flex;
  padding: 5px;
  width: ${({ width }) => width};

  @media (max-width: 420px) {
    width: 100%;
  }


  img {
    width: 100%;
    height: auto;
  }
`

export default ({ children, width }) => {

  return React.Children.map(children, (child, index) => (
    <Gallery width={width}>
      {child}
    </Gallery>
  ))
}
