import PostsLayout from 'src/layouts/PostsLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const PostPage = ({ id }) => {
  return (
    <PostsLayout>
      <BlogPostCell id={id} />
    </PostsLayout>
  )
}

export default PostPage
