import styled from 'styled-components'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Container = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const MainLayout = ({ children }) => {
  const { login } = useAuth()
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <button onClick={login}>Login</button>
          </li>
        </ul>
      </nav>
      {children}
    </Container>
  )
}

export default MainLayout
