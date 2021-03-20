import { Link, routes } from '@redwoodjs/router'

const HelloPage = () => {
  return (
    <>
      <h1>HelloPage</h1>
      <p>
        Find me in <code>./web/src/pages/HelloPage/HelloPage.js</code>
      </p>
      <p>
        My default route is named <code>hello</code>, link to me with `
        <Link to={routes.hello()}>Hello</Link>`
      </p>
    </>
  )
}

export default HelloPage
