import styled from 'styled-components'

const Container = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>
}

export default MainLayout
