function ArticleList({ articles }) {
  return (
    <>
      <h1>News Articles List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id}. {article.title}{" "}
            <small style={{ fontSize: "0.8rem" }}>{article.category}</small>
          </h2>
        </div>
      ))}
    </>
  );
}

export default ArticleList;

// Similar to getStaticProps we need to use getServerSideProps() when you export this function, it will be called by the server every request.

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
