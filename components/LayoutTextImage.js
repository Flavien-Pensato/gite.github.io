import React from 'react'
import styled from '@emotion/styled'

import ImagePopup from './ImagePopup'

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

export default ({ children, src, legend, title }) => (
  <Wrapper>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      {children}
    </div>
    <ImagePopup src={src} width="250px" legend={legend} title={title} />
  </Wrapper>
)
