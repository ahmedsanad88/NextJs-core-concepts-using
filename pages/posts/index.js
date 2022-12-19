import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>Posts List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id}. {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default PostList;

// fetching posts data using getStaticProps
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 5), // fetching all post but use only the first five
      // posts: data, // fetching all post
    },
  };
}
