import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  figure {
    height: auto;
  }

  img {
    width: 100%;
  }
`

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)
