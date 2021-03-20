const BlogPost = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <span>{post.createdAt}</span>
    </article>
  )
}

export default BlogPost
