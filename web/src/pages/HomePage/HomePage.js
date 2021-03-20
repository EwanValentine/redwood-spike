import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <section>
        <h2>Latest Posts</h2>
        <BlogPostsCell />
      </section>
      <p>
        <Link to={routes.about()}>About</Link>
      </p>
      <p>
        <Link to={routes.contact()}>Contact</Link>
      </p>
    </MainLayout>
  )
}

export default HomePage
