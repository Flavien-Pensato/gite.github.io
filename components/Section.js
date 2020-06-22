import styled from '@emotion/styled'

const Section = styled.section`
  max-width: 54rem;
  margin: 112px auto;
  line-height: 22px;

  @media (max-width: 420px) {
    margin: 56px auto;
    padding: 0 20px;
  }
`

export default ({children, ...props}) => <Section {...props}>{children}</Section>
