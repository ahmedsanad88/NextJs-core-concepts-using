import Link from "next/link";

function Home() {
  return (
    <>
      <div>
        <Link href="/users">
          <a>Users Page</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <h1>NextJS Pre-rendering</h1>
    </>
  );
}

export default Home;
