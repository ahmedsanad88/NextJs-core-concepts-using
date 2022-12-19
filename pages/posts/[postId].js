import { useRouter } from "next/router";

function PostDetails({ post }) {
  // In case of fallback: true => to avoid error while use fallback set to true we using the conditional rendering
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Post Details</h1>
      <div>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default PostDetails;

// function to handle dynamic paths and it's value
export async function getStaticPaths() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data = await res.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`, // as we require it as a string
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
      {
        params: {
          postId: "4",
        },
      },
      {
        params: {
          postId: "5",
        },
      },
    ],
    // paths, // new ES6 feature
    fallback: true,
    // fallback: false,
  };
}

export async function getStaticProps(context) {
  // we can destructure the context object like following
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  // In case of fallback: true to handle if the request exceeding the current available data then show the 404 page.
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
